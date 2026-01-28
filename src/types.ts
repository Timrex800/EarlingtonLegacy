
export interface AuditItem {
  id: string;
  category: 'QS' | 'Compliance' | 'Performance' | 'UX';
  title: string;
  status: 'passed' | 'warning' | 'pending';
  details: string;
  section: string;
}

export enum PageView {
  LANDING = 'landing',
  AUDIT = 'audit'
}
