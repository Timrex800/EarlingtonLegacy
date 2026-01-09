import fs from 'fs';
import path from 'path';

const DEPLOY_YML_PATH = path.join(process.cwd(), '.github', 'workflows', 'deploy-sync.yml');

interface ConfigRule {
  description: string;
  check: (content: string) => boolean | string;
}

const rules: ConfigRule[] = [
  {
    description: "No hardcoded passwords in deployment config",
    check: (content) => {
      // Look for 'password:' followed by anything that ISN'T using ${{ secrets... }}
      // Handle optional quotes
      const match = content.match(/password:\s+["']?(?!\$\{\{\s*secrets\.)(.*)["']?/i);
      if (match && match[1].trim() && !match[1].includes('${{ secrets.')) {
        return `Found potential hardcoded password: "${match[1].trim()}". Please use \${{ secrets.AFRIHOST_PASSWORD }}`;
      }
      return true;
    },
  },
  {
    description: "Use AFRIHOST_HOST secret",
    check: (content) => {
       if (!content.match(/server:\s+["']?\$\{\{\s*secrets\.AFRIHOST_HOST\s*\}\}["']?/)) {
         return "Server field should use ${{ secrets.AFRIHOST_HOST }}";
       }
       return true;
    }
  },
  {
    description: "Use AFRIHOST_USERNAME secret",
    check: (content) => {
       if (!content.match(/username:\s+["']?\$\{\{\s*secrets\.AFRIHOST_USERNAME\s*\}\}["']?/)) {
         return "Username field should use ${{ secrets.AFRIHOST_USERNAME }}";
       }
       return true;
    }
  },
  {
    description: "Verify FTP Port 21",
    check: (content) => content.includes('port: 21') || "Port should be explicitly set to 21 for FTP",
  },
  {
      description: "Verify Site URL use of secrets",
      check: (content) => content.includes('NEXT_PUBLIC_SITE_URL: "${{ secrets.SITE_URL }}"') || "NEXT_PUBLIC_SITE_URL should use ${{ secrets.SITE_URL }}",
  },
  {
      description: "Verify Firebase Project ID use of secrets",
      check: (content) => content.includes('projectId: "${{ secrets.FIREBASE_PROJECT_ID }}"') || "projectId should use ${{ secrets.FIREBASE_PROJECT_ID }}",
  }
];

function runChecks() {
  console.log("🛡️  Starting Deployment Guard Scan...");
  
  if (!fs.existsSync(DEPLOY_YML_PATH)) {
    console.error("❌ deploy.yml not found at: " + DEPLOY_YML_PATH);
    process.exit(1);
  }

  const content = fs.readFileSync(DEPLOY_YML_PATH, 'utf-8');
  let hasErrors = false;

  for (const rule of rules) {
    const result = rule.check(content);
    if (result === true) {
      console.log(`✅ ${rule.description}`);
    } else {
      console.error(`❌ ${rule.description} FAILED: ${result}`);
      hasErrors = true;
    }
  }

  if (hasErrors) {
    console.error("\n🚫 Deployment config validation FAILED. Please fix the errors above.");
    process.exit(1);
  } else {
    console.log("\n✨ All systems go! Deployment configuration is valid and secure.");
  }
}

runChecks();
