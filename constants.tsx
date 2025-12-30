
import { AuditItem } from './types';

export const NPC_STATUS = "NPC Registration: 2023/894210/08";
export const EARLINGTON_DAY = "April 18, 2026";
export const GOOGLE_AI_STUDIO_URL = "https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%221XyzbQ8xUqInykIu-GiqVoVZIG3YZmao0%22%5D,%22action%22:%22open%22,%22userId%22:%22117947360650694935977%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing";

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
    title: 'Landing Page Experience',
    status: 'passed',
    details: 'Load time < 1.2s. Optimized for mobile-first indexing (Section 11).',
    section: 'Section 1.1'
  },
  {
    id: '2',
    category: 'Compliance',
    title: 'NPO Mission Transparency',
    status: 'passed',
    details: 'NPC status and Section 18A tax benefits visible in multiple sections.',
    section: 'Section 5'
  },
  {
    id: '3',
    category: 'QS',
    title: 'Ad Relevance (Keywords)',
    status: 'passed',
    details: 'Integration of "heritage conservation South Africa" and "legacy preservation".',
    section: 'Section 1.2'
  },
  {
    id: '4',
    category: 'UX',
    title: 'Conversion Pathing',
    status: 'passed',
    details: 'Distinct CTAs for Donations, Events, and Volunteers (Section 4.1).',
    section: 'Section 4.1'
  },
  {
    id: '5',
    category: 'Compliance',
    title: 'Global Site Tag (gtag.js)',
    status: 'warning',
    details: 'Tag configured in <head>. Requires domain-level verification to complete.',
    section: 'Section 4.1'
  }
];