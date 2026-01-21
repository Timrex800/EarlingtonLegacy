#!/usr/bin/env node

/**
 * Earlington Legacy Initiative - Repository Diagnostic Script
 * Scans local repository for deployment issues
 * Run: node diagnostic.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('═══════════════════════════════════════════════════════════');
console.log('   EARLINGTON LEGACY INITIATIVE - REPOSITORY DIAGNOSTIC   ');
console.log('═══════════════════════════════════════════════════════════\n');

const results = {
  issues: [],
  fixes: [],
  warnings: []
};

// Helper function to check file exists
function fileExists(filePath) {
  return fs.existsSync(filePath);
}

// Helper function to read file
function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    return null;
  }
}

// Helper function to run git commands
function gitCommand(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf8' }).trim();
  } catch (e) {
    return null;
  }
}

console.log('📊 Phase 1: Git Repository Status\n');

// Check current branch
const currentBranch = gitCommand('git branch --show-current');
console.log(`✓ Current Branch: ${currentBranch}`);

// Check git status
const gitStatus = gitCommand('git status --short');
if (gitStatus) {
  console.log(`⚠️  Uncommitted Changes:\n${gitStatus}`);
  results.warnings.push('Uncommitted changes detected');
} else {
  console.log('✓ Working directory clean');
}

// List all branches
const branches = gitCommand('git branch -a');
console.log(`\n📌 Available Branches:\n${branches}\n`);

// Check last commits on each branch
['main', 'dev', 'ai-updates'].forEach(branch => {
  const lastCommit = gitCommand(`git log ${branch} -1 --oneline 2>/dev/null`);
  if (lastCommit) {
    console.log(`  ${branch}: ${lastCommit}`);
  }
});

console.log('\n═══════════════════════════════════════════════════════════\n');
console.log('📊 Phase 2: Critical Files Check\n');

// Check for AboutPage.tsx
const aboutPagePaths = [
  'src/components/AboutPage.tsx',
  'components/AboutPage.tsx',
  'src/pages/AboutPage.tsx',
  'pages/AboutPage.tsx'
];

let aboutPageFound = false;
aboutPagePaths.forEach(p => {
  if (fileExists(p)) {
    console.log(`✓ AboutPage found: ${p}`);
    aboutPageFound = true;
    
    // Check file size
    const stats = fs.statSync(p);
    console.log(`  Size: ${stats.size} bytes`);
    console.log(`  Modified: ${stats.mtime.toLocaleString()}`);
  }
});

if (!aboutPageFound) {
  console.log('❌ AboutPage.tsx NOT FOUND');
  results.issues.push('AboutPage.tsx missing from repository');
}

// Check for vercel.json
console.log('\n');
if (fileExists('vercel.json')) {
  console.log('✓ vercel.json exists');
  const vercelConfig = readFile('vercel.json');
  if (vercelConfig && vercelConfig.includes('rewrites')) {
    console.log('  ✓ Contains rewrites configuration');
  } else {
    console.log('  ⚠️  Missing rewrites configuration');
    results.warnings.push('vercel.json missing rewrites for SPA routing');
  }
} else {
  console.log('❌ vercel.json NOT FOUND');
  results.issues.push('vercel.json missing - CRITICAL for React Router on Vercel');
  results.fixes.push('Create vercel.json with SPA rewrites');
}

// Check tailwind.config.js
console.log('\n');
const tailwindPaths = ['tailwind.config.js', 'tailwind.config.ts', 'tailwind.config.cjs'];
let tailwindFound = false;

tailwindPaths.forEach(p => {
  if (fileExists(p)) {
    console.log(`✓ Tailwind config found: ${p}`);
    tailwindFound = true;
    
    const config = readFile(p);
    if (config) {
      // Check for custom colors
      if (config.includes('npc-blue') && config.includes('primary')) {
        console.log('  ✓ Custom colors configured');
      } else {
        console.log('  ⚠️  Custom colors may be missing');
        results.warnings.push('Verify custom Tailwind colors (npc-blue, primary)');
      }
      
      // Check for dark mode
      if (config.includes('darkMode')) {
        console.log('  ✓ Dark mode configured');
      } else {
        console.log('  ⚠️  Dark mode not configured');
      }
    }
  }
});

if (!tailwindFound) {
  console.log('❌ Tailwind config NOT FOUND');
  results.issues.push('Tailwind configuration missing');
}

// Check package.json
console.log('\n');
if (fileExists('package.json')) {
  console.log('✓ package.json exists');
  const pkg = JSON.parse(readFile('package.json'));
  
  // Check critical dependencies
  const requiredDeps = [
    'react',
    'react-router-dom',
    'lucide-react'
  ];
  
  const requiredDevDeps = [
    'tailwindcss',
    'typescript'
  ];
  
  console.log('  Checking dependencies:');
  requiredDeps.forEach(dep => {
    if (pkg.dependencies && pkg.dependencies[dep]) {
      console.log(`    ✓ ${dep}: ${pkg.dependencies[dep]}`);
    } else {
      console.log(`    ❌ ${dep} MISSING`);
      results.issues.push(`Missing dependency: ${dep}`);
    }
  });
  
  console.log('  Checking devDependencies:');
  requiredDevDeps.forEach(dep => {
    if (pkg.devDependencies && pkg.devDependencies[dep]) {
      console.log(`    ✓ ${dep}: ${pkg.devDependencies[dep]}`);
    } else {
      console.log(`    ⚠️  ${dep} may be missing`);
      results.warnings.push(`Dev dependency ${dep} not found`);
    }
  });
} else {
  console.log('❌ package.json NOT FOUND');
  results.issues.push('package.json missing - CRITICAL');
}

console.log('\n═══════════════════════════════════════════════════════════\n');
console.log('📊 Phase 3: Build Configuration\n');

// Check for build output directory
const distDirs = ['dist', 'build', 'out'];
distDirs.forEach(dir => {
  if (fileExists(dir)) {
    console.log(`✓ Build directory exists: ${dir}`);
  }
});

// Check index.html
const indexPaths = ['index.html', 'public/index.html', 'src/index.html'];
let indexFound = false;
indexPaths.forEach(p => {
  if (fileExists(p)) {
    console.log(`✓ index.html found: ${p}`);
    indexFound = true;
  }
});

if (!indexFound) {
  console.log('⚠️  index.html not found in common locations');
  results.warnings.push('index.html location unclear');
}

console.log('\n═══════════════════════════════════════════════════════════\n');
console.log('📊 DIAGNOSTIC SUMMARY\n');

console.log(`🔴 Critical Issues Found: ${results.issues.length}`);
results.issues.forEach((issue, i) => {
  console.log(`   ${i + 1}. ${issue}`);
});

console.log(`\n⚠️  Warnings: ${results.warnings.length}`);
results.warnings.forEach((warning, i) => {
  console.log(`   ${i + 1}. ${warning}`);
});

console.log(`\n🔧 Recommended Fixes: ${results.fixes.length}`);
results.fixes.forEach((fix, i) => {
  console.log(`   ${i + 1}. ${fix}`);
});

console.log('\n═══════════════════════════════════════════════════════════\n');

// Generate fix script if issues found
if (results.issues.length > 0) {
  console.log('💡 NEXT STEPS:\n');
  console.log('1. Review the issues listed above');
  console.log('2. Would you like me to generate a fix script? (Y/N)');
  console.log('3. Run: node fix-issues.js (if generated)\n');
}

// Output JSON report
const reportPath = 'diagnostic-report.json';
fs.writeFileSync(reportPath, JSON.stringify({
  timestamp: new Date().toISOString(),
  branch: currentBranch,
  issues: results.issues,
  warnings: results.warnings,
  fixes: results.fixes
}, null, 2));

console.log(`📄 Full report saved to: ${reportPath}\n`);
console.log('═══════════════════════════════════════════════════════════\n');