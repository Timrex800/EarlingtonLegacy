
import { AuditItem } from './types';

export const NPC_STATUS = "NPC Registration: 2025/931583/08";
export const EARLINGTON_DAY = "April 18, 2026";

export const AI_SYSTEM_INSTRUCTION = `
You are the TIMREX AI, the advanced intelligence core for the Earlington Legacy Initiative.
Entity: Earlington Legacy Initiative NPC (Registration: 2025/931583/08).
Context: A non-profit bridging the digital divide for Earlington Secondary School (Phoenix, KZN).
Key Facts:
- Infrastructure: 1GBPS Fibre via Afrihost/Vumatel is LIVE.
- Fundraising Goal: Earlington Day 2026 (April 18th) - 45th Anniversary.
- Board: The Directors directory is currently in VERIFICATION stage (Coming Q1 2026).
- Location: https://www.earlingtonlegacy.org.za/directors
Guidelines: Your name is TIMREX AI. Be inspiring, professional, and emphasize the "Heritage meets Innovation" philosophy. If asked about technical specs, mention our G-Cloud topology.
`;

export const ADS_SCRIPT = `/**
 * Title: Automated Quality Score Manager
 * Description: Pauses keywords with Quality Score < 3 to prevent Ad Grant suspension.
 * Frequency: Run Daily at 3:00 AM SAST
 * Source: Section 1.3 of Earlington Legacy Compliance Framework
 */

function main() {
  var MIN_QUALITY_SCORE = 3;
  var NOTIFICATION_EMAIL = "ads@earlingtonlegacy.org.za";
  var BRAND_EXCEPTIONS = ["Earlington", "EarlingtonLegacy"];
  
  var keywords = AdsApp.keywords()
    .withCondition("Status = ENABLED")
    .withCondition("QualityScore < " + MIN_QUALITY_SCORE)
    .withCondition("QualityScore > 0")
    .forDateRange("LAST_30_DAYS")
    .get();
  
  var pausedKeywords = [];
  while (keywords.hasNext()) {
    var keyword = keywords.next();
    var text = keyword.getText();
    if (BRAND_EXCEPTIONS.indexOf(text) === -1) {
      keyword.pause();
      pausedKeywords.push(text + " (QS: " + keyword.getQualityScore() + ")");
    }
  }
  
  if (pausedKeywords.length > 0) {
    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: "Ad Grants Alert: Low Quality Keywords Paused",
      htmlBody: "Paused keywords: " + pausedKeywords.join(", ")
    });
  }
}`;

export const AUDIT_DATA: AuditItem[] = [
  {
    id: '1',
    category: 'Performance',
    title: 'Zero-G Edge Delivery',
    status: 'passed',
    details: 'Firebase CDN LCP < 0.8s. Global multi-region failover via GCLB active.',
    section: 'Topology 1.1'
  },
  {
    id: '2',
    category: 'Compliance',
    title: 'NPO Mission Transparency',
    status: 'passed',
    details: 'NPC status and Section 18A tax benefits visible in multiple sections.',
    section: 'Legal 5.0'
  },
  {
    id: '3',
    category: 'UX',
    title: 'Heritage AI Integration',
    status: 'passed',
    details: 'Gemini-3-Flash reasoning enabled with thinking budget for historical accuracy.',
    section: 'AI 6.1'
  },
  {
    id: '4',
    category: 'Performance',
    title: 'Knowledge Base Synchronization',
    status: 'passed',
    details: 'Verbatim sitemap text synced with Gemini system instructions for 100% accuracy.',
    section: 'Data 6.2'
  },
  {
    id: '5',
    category: 'QS',
    title: 'Ad Grant Compliance',
    status: 'passed',
    details: 'Automated script active. Maintaining >5% CTR and high keyword relevance.',
    section: 'Ads 1.3'
  },
  {
    id: '6',
    category: 'Compliance',
    title: 'Global Site Tag (gtag.js)',
    status: 'warning',
    details: 'Tag configured. Awaiting final domain-level DNSSEC verification from Afrihost.',
    section: 'Analytics 4.1'
  }
];

export const TOPOLOGY_DETAILS = {
  dns: "Afrihost Managed DNS → Google Cloud DNS",
  hosting: "Firebase Serverless CDN",
  intelligence: "Gemini 3 Flash-Preview (RAG Integrated)",
  database: "Firestore NoSQL (Multi-Region Sync)",
  loadBalancer: "Google Cloud Global Load Balancer (GCLB)"
};
