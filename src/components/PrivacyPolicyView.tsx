
import React from 'react';
import { ShieldCheck, X, Lock, Mail, Phone, MapPin, ExternalLink, Download, FileText } from 'lucide-react';

const PrivacyPolicyView: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-2xl animate-fade-in overflow-hidden font-body">
      <div className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-[2rem] w-full max-w-4xl h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-white/10 flex justify-between items-center bg-slate-50 dark:bg-white/5">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/20 rounded-2xl text-primary">
              <Lock size={24} />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white tracking-tight uppercase">Privacy Policy</h2>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">Effective Date: January 18, 2026</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close privacy policy"
            className="p-2 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Document Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar text-slate-700 dark:text-slate-300 leading-relaxed space-y-8">
          
          <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl">
            <h1 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">Privacy Policy</h1>
            <p className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Effective Date: January 18, 2026</p>
            <p className="text-sm">
              Earlington Legacy Initiative NPC ("ELI," "we," "us," or "our") is committed to protecting your privacy and personal information in accordance with the Protection of Personal Information Act (POPIA), 2013. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <span className="text-primary font-bold">earlingtonlegacy.org.za</span>, make a donation, or interact with our organization.
            </p>
          </div>

          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white border-l-4 border-primary pl-4 uppercase tracking-tight">1. Information We Collect</h3>
            <p className="text-sm">We may collect the following types of personal information:</p>
            <ul className="space-y-2 text-sm list-disc pl-5">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and physical address</li>
              <li><strong>Donation Information:</strong> Payment details, donation amount, and transaction history</li>
              <li><strong>Communication Data:</strong> Correspondence through our contact forms, emails, or phone calls</li>
              <li><strong>Website Usage Data:</strong> IP address, browser type, device information, pages visited, and time spent on our site</li>
              <li><strong>Volunteer Information:</strong> Skills, availability, and background check documentation</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white border-l-4 border-primary pl-4 uppercase tracking-tight">2. How We Use Your Information</h3>
            <p className="text-sm">We use your personal information for the following purposes:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {[
                "Processing Donations: To process your contributions and issue donation receipts",
                "Communication: To respond to inquiries, send newsletters, and provide updates on our programs (with your consent)",
                "Tax Receipts: To issue Section 18A tax-deductible certificates once our PBO status is approved",
                "Program Administration: To coordinate volunteer activities and manage educational programs",
                "Website Improvement: To analyze website traffic and improve user experience",
                "Compliance: To meet legal and regulatory requirements"
              ].map((item, i) => (
                <div key={i} className="p-3 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-xl">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white border-l-4 border-primary pl-4 uppercase tracking-tight">3. Legal Basis for Processing</h3>
            <ul className="space-y-2 text-sm list-disc pl-5">
              <li><strong>Consent:</strong> When you provide information voluntarily or opt-in to communications</li>
              <li><strong>Contractual Necessity:</strong> To process donations and fulfill our commitments to donors</li>
              <li><strong>Legal Obligation:</strong> To comply with tax, financial reporting, and nonprofit regulations</li>
              <li><strong>Legitimate Interest:</strong> To improve our services and advance our educational mission</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white border-l-4 border-primary pl-4 uppercase tracking-tight">4. How We Share Your Information</h3>
            <p className="text-sm">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul className="space-y-2 text-sm list-disc pl-5">
              <li><strong>Service Providers:</strong> With trusted third-party service providers (payment processors, email service providers, web hosting) who assist in our operations and are bound by confidentiality agreements</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
              <li><strong>Professional Advisors:</strong> With our legal, accounting, or auditing professionals for compliance purposes</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>
          </section>

          <section className="space-y-4 bg-slate-900 text-white p-8 rounded-3xl">
            <h3 className="text-lg font-bold text-primary uppercase tracking-tight mb-4 flex items-center gap-2">
              <ShieldCheck className="text-primary" /> 5. Your Rights Under POPIA
            </h3>
            <p className="text-sm mb-4">You have the right to:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div><strong>Access:</strong> Request a copy of the personal information we hold about you</div>
              <div><strong>Correction:</strong> Request correction of inaccurate or incomplete information</div>
              <div><strong>Deletion:</strong> Request deletion of your personal information, subject to legal retention requirements</div>
              <div><strong>Objection:</strong> Object to the processing of your information for certain purposes</div>
              <div><strong>Withdraw Consent:</strong> Withdraw your consent to receive communications at any time</div>
              <div><strong>Data Portability:</strong> Request your data in a structured, commonly used format</div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 text-xs font-mono opacity-80">
              To exercise these rights, contact us at privacy@earlingtonlegacy.org.za or 083 657 3397.
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white border-l-4 border-primary pl-4 uppercase tracking-tight">6. Data Security</h3>
            <p className="text-sm">We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
            <ul className="space-y-2 text-sm list-disc pl-5">
              <li>Secure server hosting with SSL encryption</li>
              <li>Access controls and password protection</li>
              <li>Regular security assessments</li>
              <li>Staff training on data protection</li>
            </ul>
            <p className="text-xs italic opacity-70">Despite our efforts, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your information.</p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white border-l-4 border-primary pl-4 uppercase tracking-tight">7. Data Retention</h3>
            <p className="text-sm">We retain personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law. Donation records are retained for a minimum of 5 years to comply with South African tax and financial regulations.</p>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white border-l-4 border-primary pl-4 uppercase tracking-tight">8. Cookies and Tracking Technologies</h3>
            <p className="text-sm">Our website may use cookies and similar technologies to enhance user experience and analyze website traffic. You can control cookie preferences through your browser settings. We may use:</p>
            <ul className="space-y-1 text-sm list-disc pl-5 italic">
              <li>Essential Cookies: Required for website functionality</li>
              <li>Analytics Cookies: To understand how visitors use our site (Google Analytics)</li>
              <li>Preference Cookies: To remember your settings and preferences</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white border-l-4 border-primary pl-4 uppercase tracking-tight">9, 10, 11 & 12</h3>
            <div className="space-y-3 text-sm">
              <p><strong>9. Third-Party Links:</strong> Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.</p>
              <p><strong>10. Children's Privacy:</strong> Our website is not directed to children under 18. We do not knowingly collect personal information from minors without parental consent.</p>
              <p><strong>11. International Data Transfers:</strong> Your information may be transferred to and processed in countries outside South Africa where our service providers operate.</p>
              <p><strong>12. Changes to This Privacy Policy:</strong> We may update this Privacy Policy periodically. The updated policy will be posted on our website with a revised effective date.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white border-l-4 border-primary pl-4 uppercase tracking-tight">13. Contact Us</h3>
            <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 border border-slate-200 dark:border-white/10">
              <div className="space-y-3">
                <p className="text-[10px] font-black uppercase text-primary tracking-widest">Privacy Officer Node</p>
                <p className="font-bold text-slate-900 dark:text-white text-lg">Earlington Legacy Initiative NPC</p>
                <p className="text-xs flex items-center gap-2"><MapPin size={12} className="text-primary" /> 7 Gildcroft Close, Longcroft, Phoenix, KZN, 4068</p>
              </div>
              <div className="space-y-3">
                <a href="mailto:privacy@earlingtonlegacy.org.za" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                  <Mail size={16} className="text-primary" /> privacy@earlingtonlegacy.org.za
                </a>
                <a href="tel:+27836573397" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                  <Phone size={16} className="text-primary" /> 083 657 3397
                </a>
              </div>
            </div>
          </section>

          <section className="space-y-4 pt-8 border-t border-slate-200 dark:border-white/10">
            <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest flex items-center gap-2">
              <FileText size={16} className="text-primary" /> 14. POPIA Compliance & Information Regulator
            </h3>
            <p className="text-xs leading-relaxed">
              Earlington Legacy Initiative NPC is registered with the Information Regulator of South Africa and is committed to full compliance with POPIA. If you are not satisfied with our response to your privacy concern, you may lodge a complaint with:
              <br/><br/>
              <strong>The Information Regulator (South Africa)</strong><br/>
              Website: <a href="http://www.justice.gov.za/inforeg" target="_blank" className="text-primary underline">www.justice.gov.za/inforeg</a><br/>
              Email: <a href="mailto:inforeg@justice.gov.za" className="text-primary underline">inforeg@justice.gov.za</a>
            </p>
          </section>

          <div className="flex flex-col items-center gap-4 pt-12 text-center pb-8">
            <p className="text-[10px] font-mono opacity-50 uppercase tracking-[0.3em]">Official Governance Node: ELI-PRIV-2026-FINAL</p>
            <div className="flex gap-4">
               <button className="text-primary text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:underline">
                <Download size={10} /> Download PDF
              </button>
              <a href="https://www.earlingtonlegacy.org.za/privacy" className="text-slate-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:underline">
                <ExternalLink size={10} /> Public Link
              </a>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-6 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 flex justify-center">
          <button 
            onClick={onClose}
            className="px-12 py-4 bg-primary text-white text-xs font-black uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all shadow-xl shadow-primary/20"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyView;
