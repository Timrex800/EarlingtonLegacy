#!/usr/bin/env node

/**
 * Earlington Legacy Initiative - Deployment Sync Check
 * Verifies GitHub sync and generates deployment commands
 * Run: node deployment-check.js
 */

const { execSync } = require('child_process');
const fs = require('fs');

console.log('═══════════════════════════════════════════════════════════');
console.log('   EARLINGTON LEGACY - DEPLOYMENT SYNC VERIFICATION   ');
console.log('═══════════════════════════════════════════════════════════\n');

function gitCommand(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf8' }).trim();
  } catch (e) {
    return null;
  }
}

// Check current status
const currentBranch = gitCommand('git branch --show-current');
console.log(`📍 Current Branch: ${currentBranch}\n`);

// Check if there are unpushed commits
console.log('📊 Checking GitHub Sync Status...\n');

const unpushedCommits = gitCommand(`git log origin/${currentBranch}..HEAD --oneline`);
if (unpushedCommits) {
  console.log('⚠️  UNPUSHED COMMITS DETECTED:');
  console.log(unpushedCommits);
  console.log('\n❌ Your local changes are NOT on GitHub!');
  console.log('   This is why Vercel shows the old version.\n');
} else {
  console.log('✓ Local branch is in sync with GitHub\n');
}

// Check remote branches
console.log('═══════════════════════════════════════════════════════════\n');
console.log('📊 GitHub Branch Comparison:\n');

['main', 'dev', 'active-dev'].forEach(branch => {
  const localCommit = gitCommand(`git rev-parse ${branch} 2>/dev/null`);
  const remoteCommit = gitCommand(`git rev-parse origin/${branch} 2>/dev/null`);
  
  if (localCommit && remoteCommit) {
    if (localCommit === remoteCommit) {
      console.log(`✓ ${branch}: In sync`);
    } else {
      console.log(`⚠️  ${branch}: OUT OF SYNC`);
      console.log(`   Local:  ${localCommit.substring(0, 7)}`);
      console.log(`   Remote: ${remoteCommit.substring(0, 7)}`);
    }
  } else if (localCommit) {
    console.log(`⚠️  ${branch}: Exists locally but NOT on GitHub`);
  } else if (remoteCommit) {
    console.log(`ℹ️  ${branch}: Exists on GitHub but not locally`);
  }
});

// Check last push time
console.log('\n═══════════════════════════════════════════════════════════\n');
console.log('📊 Recent Activity:\n');

const lastCommitLocal = gitCommand(`git log -1 --format="%h - %s (%cr)" ${currentBranch}`);
const lastCommitRemote = gitCommand(`git log -1 --format="%h - %s (%cr)" origin/${currentBranch}`);

console.log('Local last commit:');
console.log(`  ${lastCommitLocal}\n`);
console.log('GitHub last commit:');
console.log(`  ${lastCommitRemote}\n`);

// Generate deployment commands
console.log('═══════════════════════════════════════════════════════════\n');
console.log('🚀 DEPLOYMENT COMMANDS:\n');

if (unpushedCommits) {
  console.log('STEP 1: Push your local changes to GitHub\n');
  console.log('Run these commands:\n');
  console.log(`git add .`);
  console.log(`git commit -m "Fix: Update About Us page rendering"`);
  console.log(`git push origin ${currentBranch}\n`);
  
  console.log('═══════════════════════════════════════════════════════════\n');
  console.log('STEP 2: Verify Vercel Deployment\n');
  console.log('After pushing to GitHub:');
  console.log('1. Go to https://vercel.com/dashboard');
  console.log('2. Find "EarlingtonLegacy" project');
  console.log('3. Check if new deployment started automatically');
  console.log('4. If not, click "Redeploy" button\n');
} else {
  console.log('✓ Your code is already on GitHub\n');
  console.log('The issue may be with Vercel configuration.\n');
  console.log('RECOMMENDED ACTIONS:\n');
  console.log('1. Check Vercel deployment settings:');
  console.log('   - Verify it\'s deploying from the correct branch');
  console.log('   - Check build command is correct');
  console.log('   - Ensure output directory is set\n');
  console.log('2. Trigger manual redeploy:');
  console.log('   - Go to Vercel dashboard');
  console.log('   - Click "Redeploy" on latest deployment\n');
  console.log('3. Check build logs for errors:');
  console.log('   - Look for Tailwind CSS build errors');
  console.log('   - Check for missing dependencies\n');
}

// Check if AboutPage has been modified recently
console.log('═══════════════════════════════════════════════════════════\n');
console.log('📄 AboutPage.tsx Status:\n');

const aboutPagePaths = [
  'src/components/AboutPage.tsx',
  'components/AboutPage.tsx',
  'src/pages/AboutPage.tsx'
];

let aboutPagePath = null;
for (const path of aboutPagePaths) {
  if (fs.existsSync(path)) {
    aboutPagePath = path;
    break;
  }
}

if (aboutPagePath) {
  const aboutPageHistory = gitCommand(`git log -3 --format="%h - %s (%cr)" -- ${aboutPagePath}`);
  if (aboutPageHistory) {
    console.log(`Recent changes to ${aboutPagePath}:`);
    console.log(aboutPageHistory);
    console.log('');
  }
  
  const aboutPageStatus = gitCommand(`git status ${aboutPagePath}`);
  if (aboutPageStatus.includes('modified') || aboutPageStatus.includes('new file')) {
    console.log(`⚠️  ${aboutPagePath} has uncommitted changes!`);
  } else {
    console.log(`✓ ${aboutPagePath} is committed`);
  }
}

console.log('\n═══════════════════════════════════════════════════════════\n');
console.log('📋 QUICK REFERENCE:\n');
console.log('GitHub Repository: https://github.com/Timrex800/EarlingtonLegacy');
console.log('Current Branch: ' + currentBranch);
console.log('Website: https://www.earlingtonlegacy.org.za\n');

// Save deployment report
const deployReport = {
  timestamp: new Date().toISOString(),
  currentBranch,
  hasUnpushedCommits: !!unpushedCommits,
  unpushedCommits: unpushedCommits || 'none',
  lastLocalCommit: lastCommitLocal,
  lastRemoteCommit: lastCommitRemote,
  recommendedAction: unpushedCommits ? 'PUSH_TO_GITHUB' : 'CHECK_VERCEL_CONFIG'
};

fs.writeFileSync('deployment-report.json', JSON.stringify(deployReport, null, 2));
console.log('📄 Full deployment report saved to: deployment-report.json\n');
console.log('═══════════════════════════════════════════════════════════\n');