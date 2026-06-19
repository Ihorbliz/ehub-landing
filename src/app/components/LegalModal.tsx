import { useState } from "react";
import { X } from "lucide-react";

interface LegalModalProps {
  onClose: () => void;
  initialTab?: 'terms' | 'privacy';
}

export function LegalModal({ onClose, initialTab = 'terms' }: LegalModalProps) {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>(initialTab);

  return (
    <div className="fixed inset-0 z-50 flex flex-col p-4 sm:p-6 md:p-12">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative bg-white border border-black/10 rounded-2xl w-full h-full max-w-5xl mx-auto flex flex-col shadow-2xl overflow-hidden"
        style={{ fontFamily: "'Work Sans', sans-serif" }}
      >
        <div className="flex-none p-6 border-b border-black/10 flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a1825]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Legal Information
                </h2>
                <button onClick={onClose} className="p-2 rounded-full hover:bg-black/5 text-[#0a1825]/40 hover:text-[#0a1825] transition-colors">
                    <X size={24} />
                </button>
            </div>
            
            <div className="flex flex-wrap gap-2 p-1 bg-black/5 rounded-xl self-start">
                <button 
                    onClick={() => setActiveTab('terms')}
                    className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-all ${activeTab === 'terms' ? 'bg-white text-[#0a1825] shadow-sm' : 'text-[#5a6475] hover:text-[#0a1825]'}`}
                >
                    OFFICIAL GIVEAWAY TERMS & CONDITIONS
                </button>
                <button 
                    onClick={() => setActiveTab('privacy')}
                    className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-all ${activeTab === 'privacy' ? 'bg-white text-[#0a1825] shadow-sm' : 'text-[#5a6475] hover:text-[#0a1825]'}`}
                >
                    PRIVACY NOTICE
                </button>
            </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-[#f9f9f9]">
            <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-black/5 text-[#5a6475] text-sm leading-relaxed">
                {activeTab === 'terms' ? <TermsContent /> : <PrivacyContent />}
            </div>
        </div>
      </div>
    </div>
  );
}

function TermsContent() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-[#0a1825] uppercase">E-HUB ENERGY x BMW CE 04 GIVEAWAY<br/>Intersolar Europe 2026</h3>
      
      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">1. Organizer</h4>
        <p>This Giveaway (“Giveaway”) is organized by:<br/>
        E-HAB Energy Sp. z o.o.<br/>
        pl. gen. Walerego Wróblewskiego 3A/7<br/>
        50-413 Wrocław, Poland<br/>
        NIP: 8993027941<br/>
        (“Organizer”, “E-HAB Energy”, “we”, “us”).</p>
        <p className="mt-2">The Giveaway is conducted during Intersolar Europe 2026, taking place in Munich, Germany, from 23–25 June 2026, at E-HAB Energy stand C4.130.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">2. Eligibility</h4>
        <p>Participation is open to natural persons who:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>are at least 18 years old;</li>
          <li>attend Intersolar Europe 2026 in person;</li>
          <li>personally visit the E-HAB Energy stand (C4.130);</li>
          <li>fully comply with these Terms and Conditions.</li>
        </ul>
        <p className="mt-2">Employees, contractors, representatives, agents of the Organizer, and their immediate family members are not eligible to participate.</p>
        <p>Participation is free of charge and does not require any purchase.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">3. How to Participate</h4>
        <p>To enter the Giveaway, participants must complete all of the following steps during the exhibition period:</p>
        
        <div className="mt-4 space-y-4">
          <div>
            <strong className="text-[#0a1825]">Step 1</strong>
            <p>Complete the official participation form and provide accurate contact information.</p>
          </div>
          <div>
            <strong className="text-[#0a1825]">Step 2</strong>
            <p>Publish a LinkedIn post featuring a photograph with the BMW CE 04 displayed at the E-HUB Energy stand.</p>
            <p>The post must:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>tag E-HUB Energy;</li>
              <li>include the hashtag #PoweredByEHUB;</li>
              <li>remain publicly visible until the winner is announced;</li>
              <li>follow LinkedIn’s Terms of Service.</li>
            </ul>
          </div>
          <div>
            <strong className="text-[#0a1825]">Step 3</strong>
            <p>Follow E-HUB Energy on LinkedIn.</p>
          </div>
          <div>
            <strong className="text-[#0a1825]">Step 4</strong>
            <p>Successfully complete the quiz included in the participation form.</p>
          </div>
        </div>

        <p className="mt-4">Only entries that fulfill all requirements will be eligible.</p>
        <p className="mt-2">The Organizer reserves the right to verify all entries and to reject, remove, or disqualify any entry that:</p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>is incomplete;</li>
          <li>contains false information;</li>
          <li>violates these Terms;</li>
          <li>is fraudulent, abusive, or otherwise inconsistent with the purpose of the Giveaway.</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">4. Prize</h4>
        <p>One (1) winner will receive:<br/>
        <strong>BMW CE 04 electric scooter</strong><br/>
        (“Prize”).</p>
        <p className="mt-2">The Prize:</p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>is non-transferable;</li>
          <li>cannot be exchanged for cash;</li>
          <li>cannot be exchanged for another product or service.</li>
        </ul>
        <p className="mt-2">The Organizer reserves the right to substitute the Prize with another prize of equal or greater value if circumstances beyond the Organizer’s reasonable control make such substitution necessary.</p>
        <p className="mt-2">The Prize is awarded “as is”.</p>
        <p>No warranties are provided by the Organizer beyond any warranties legally applicable from the manufacturer.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2 uppercase">5. Handover of the Prize</h4>
        <p className="uppercase">The Prize shall be transferred to the winner on the basis of a signed handover protocol (acceptance-transfer act).</p>
        <p className="mt-2 uppercase">By signing the handover protocol, the winner confirms that:</p>
        <ul className="list-disc pl-5 mt-1 space-y-1 uppercase">
          <li>The Prize has been received in good condition;</li>
          <li>The winner has no claims regarding the condition or completeness of the Prize at the time of handover;</li>
          <li>Ownership and responsibility for the Prize pass to the winner from the moment of signing.</li>
        </ul>
        <p className="mt-2 uppercase">If the winner refuses to sign the handover protocol, the Organizer reserves the right to withhold the Prize and, if necessary, select an alternate winner in accordance with Section 7.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">6. Delivery, Registration and Ownership Costs</h4>
        <p>The winner is solely responsible for:</p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>transportation of the Prize;</li>
          <li>registration of the vehicle;</li>
          <li>insurance;</li>
          <li>import procedures;</li>
          <li>customs clearance;</li>
          <li>taxes;</li>
          <li>licensing requirements;</li>
          <li>compliance with local regulations;</li>
          <li>any other costs associated with accepting, owning, transporting or operating the Prize.</li>
        </ul>
        <p className="mt-2">The Organizer’s responsibility is limited exclusively to making the Prize available to the winner at the E-HUB Energy stand during the exhibition.</p>
        <p>The Organizer does not provide shipping, transportation, insurance, registration services or any logistical support related to the Prize.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">7. Winner Selection</h4>
        <p>The winner will be selected through a random draw from all eligible entries.</p>
        <p className="mt-2"><strong>Registration deadline:</strong> Participation forms must be submitted no later than <strong>25 June 2026 at 14:00 CET</strong>. Entries submitted after this time will not be eligible for the draw.</p>
        <p className="mt-2">The drawing will take place on:<br/>
        <strong>25 June 2026<br/>
        15:00 CET<br/>
        E-HUB Energy Stand C4.130<br/>
        Intersolar Europe 2026</strong></p>
        <p className="mt-2">The selected winner must be physically present at the stand at the time of the drawing.</p>
        <p>If the selected winner is not present within ten (10) minutes after being announced, the Organizer may select an alternative winner through a new random draw.</p>
        <p className="mt-2">The Organizer’s decision is final and binding.<br/>
        No correspondence regarding the outcome of the Giveaway will be entered into.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">8. Prize Acceptance</h4>
        <p>Before receiving the Prize, the winner may be required to:</p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>provide proof of identity;</li>
          <li>provide proof of age;</li>
          <li>sign a Prize Acceptance Form;</li>
          <li>sign and provide any documents reasonably necessary to transfer possession of the Prize.</li>
        </ul>
        <p className="mt-2">Failure to comply may result in disqualification and selection of an alternative winner.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">9. Publicity Rights</h4>
        <p>By participating in the Giveaway, participants agree that the Organizer may:</p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>announce the winner’s name;</li>
          <li>announce the winner’s company name;</li>
          <li>announce the winner’s country;</li>
          <li>publish photographs and videos taken during the drawing and award ceremony.</li>
        </ul>
        <p className="mt-2">Such use may occur on:</p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>the Organizer’s website;</li>
          <li>LinkedIn;</li>
          <li>social media channels;</li>
          <li>marketing materials;</li>
          <li>press releases;</li>
          <li>exhibition-related communications.</li>
        </ul>
        <p className="mt-2">No additional compensation shall be due.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">10. User Content License</h4>
        <p>By submitting a LinkedIn post as part of the Giveaway, participants grant the Organizer a non-exclusive, worldwide, royalty-free license to:</p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>display;</li>
          <li>reproduce;</li>
          <li>share;</li>
          <li>repost;</li>
          <li>publish;</li>
        </ul>
        <p className="mt-2">the submitted content for marketing, promotional and public relations purposes related to E-HUB Energy.</p>
        <p>The participant remains the owner of the original content.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">11. Data Protection</h4>
        <p>Personal data collected during the Giveaway will be processed in accordance with applicable data protection laws, including the General Data Protection Regulation (EU) 2016/679 (“GDPR”).</p>
        <p className="mt-2">The applicable Privacy Notice forms an integral part of these Terms and Conditions.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">12. Taxes</h4>
        <p>Any taxes, duties, registration fees, customs charges or governmental levies arising from the acceptance, transfer, ownership or use of the Prize shall be solely borne by the winner.</p>
        <p className="mt-2">The Organizer assumes no responsibility for any tax obligations of the winner.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">13. Limitation of Liability</h4>
        <p>To the fullest extent permitted by applicable law, the Organizer shall not be liable for:</p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>lost, delayed or incomplete entries;</li>
          <li>technical failures;</li>
          <li>internet interruptions;</li>
          <li>platform outages;</li>
          <li>human errors;</li>
          <li>third-party actions;</li>
          <li>damages arising from participation in the Giveaway;</li>
          <li>damages arising from acceptance, transportation, ownership or use of the Prize.</li>
        </ul>
        <p className="mt-2">Nothing in these Terms excludes liability that cannot legally be excluded under applicable law.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">14. Disqualification</h4>
        <p>The Organizer reserves the right to disqualify any participant who:</p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>breaches these Terms;</li>
          <li>manipulates the Giveaway process;</li>
          <li>acts fraudulently;</li>
          <li>provides false information;</li>
          <li>behaves in a manner that may damage the reputation of the Organizer.</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">15. Modification or Cancellation</h4>
        <p>The Organizer reserves the right to modify, suspend or cancel the Giveaway at any time if circumstances beyond its reasonable control make such action necessary.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">16. LinkedIn Disclaimer</h4>
        <p>This Giveaway is in no way sponsored, endorsed, administered by, or associated with LinkedIn.</p>
        <p className="mt-2">Participants acknowledge that they provide information to the Organizer and not to LinkedIn.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">17. BMW Disclaimer</h4>
        <p>This Giveaway is in no way sponsored, endorsed, administered by, or associated with BMW AG or any of its affiliates.</p>
        <p className="mt-2">BMW is not responsible for the administration of this Giveaway.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">18. Language</h4>
        <p>These Terms and Conditions are provided in English.</p>
        <p className="mt-2">In the event of any discrepancy between translations and the English version, the English version shall prevail.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">19. Governing Law</h4>
        <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of Germany.</p>
        <p className="mt-2">Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts of Munich, Germany.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">20. Contact</h4>
        <p>Questions regarding the Giveaway may be directed to:</p>
        <p>marketing@e-hub-bess.com</p>
        <p className="mt-4 font-bold text-[#0a1825]">By participating in the Giveaway, participants confirm that they have read, understood and accepted these Terms and Conditions.</p>
      </div>
    </div>
  );
}

function PrivacyContent() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-[#0a1825] uppercase">E-HUB ENERGY x BMW CE 04 GIVEAWAY<br/>Intersolar Europe 2026</h3>
      
      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">1. Data Controller</h4>
        <p>The controller responsible for the processing of your personal data is:<br/>
        E-HAB Energy Sp. z o.o.<br/>
        pl. gen. Walerego Wróblewskiego 3A/7<br/>
        50-413 Wrocław<br/>
        Poland<br/>
        NIP: 8993027941<br/>
        Email: marketing@e-hub-bess.com<br/>
        (“E-HUB Energy”, “we”, “our”, “us”)</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">2. Purpose of this Privacy Notice</h4>
        <p>This Privacy Notice explains how E-HUB Energy collects, uses, stores and protects personal data provided by participants of the BMW CE 04 Giveaway conducted during Intersolar Europe 2026.</p>
        <p className="mt-2">We are committed to protecting your privacy and processing your personal data in accordance with the General Data Protection Regulation (EU) 2016/679 (“GDPR”) and applicable data protection laws.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">3. Personal Data We Collect</h4>
        <p>When you participate in the Giveaway, we may collect the following information:</p>
        
        <div className="mt-2 space-y-2">
          <p><strong>Identification Data</strong><br/>First name, Last name</p>
          <p><strong>Contact Information</strong><br/>Email address, Phone number</p>
          <p><strong>Professional Information</strong><br/>Company name, Job title, Country</p>
          <p><strong>Participation Information</strong><br/>Link to your LinkedIn post, Confirmation of LinkedIn follow, Quiz responses, Date and time of participation</p>
          <p className="uppercase"><strong>Prize Handover Information</strong><br/>Signature on the prize handover protocol, Date of prize handover, (Where applicable) Identification document details required to confirm identity for handover purposes</p>
          <p><strong>Event Documentation</strong><br/>Photographs, Videos, Images taken during the exhibition, prize draw or award ceremony</p>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">4. Legal Basis for Processing</h4>
        <p>We process your personal data based on the following legal grounds:</p>
        
        <div className="mt-4 space-y-4">
          <div>
            <strong className="text-[#0a1825]">Performance of the Giveaway Terms (Article 6(1)(b) GDPR)</strong>
            <p>We process your data to:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>register your participation;</li>
              <li>verify eligibility;</li>
              <li className="uppercase">Document the handover of the prize;</li>
              <li>administer the Giveaway;</li>
              <li>contact the winner;</li>
              <li>award the Prize.</li>
            </ul>
          </div>
          <div>
            <strong className="text-[#0a1825]">Legitimate Interests (Article 6(1)(f) GDPR)</strong>
            <p>We process certain data to:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>ensure fairness of the Giveaway;</li>
              <li>prevent fraud;</li>
              <li>document the prize draw process;</li>
              <li>defend legal claims if necessary.</li>
            </ul>
          </div>
          <div>
            <strong className="text-[#0a1825]">Consent (Article 6(1)(a) GDPR)</strong>
            <p>Where you expressly consent, we may process your data for:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>marketing communications;</li>
              <li>newsletters;</li>
              <li>future product updates;</li>
              <li>promotional information about E-HUB Energy.</li>
            </ul>
            <p className="mt-2">You may withdraw your consent at any time. Withdrawal of consent does not affect the lawfulness of processing carried out before withdrawal.</p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">5. Marketing Communications</h4>
        <p>If you choose to receive marketing communications, E-HUB Energy may contact you regarding:</p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>energy storage solutions (BESS);</li>
          <li>renewable energy products;</li>
          <li>company updates;</li>
          <li>industry events;</li>
          <li>webinars;</li>
          <li>exhibitions;</li>
          <li>business opportunities.</li>
        </ul>
        <p className="mt-2">Marketing communications will only be sent if you have provided explicit consent.</p>
        <p>You may unsubscribe at any time using the unsubscribe link included in communications or by contacting us directly.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">6. Photographs and Videos</h4>
        <p>During Intersolar Europe 2026, photographs and video recordings may be taken at the E-HUB Energy stand.</p>
        <p className="mt-2">These materials may be used for:</p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>social media;</li>
          <li>company website;</li>
          <li>press releases;</li>
          <li>marketing materials;</li>
          <li>event reporting;</li>
          <li>promotional campaigns.</li>
        </ul>
        <p className="mt-2">Where required by law, separate consent will be requested.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">7. Who Receives Your Data</h4>
        <p>We may share your personal data with trusted service providers acting on our behalf, including:</p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>CRM providers;</li>
          <li>cloud hosting providers;</li>
          <li>email marketing providers;</li>
          <li>event management systems;</li>
          <li>legal advisors;</li>
          <li>IT service providers.</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">8. International Transfers</h4>
        <p>Your personal data may be processed by service providers located outside the European Economic Area (EEA).</p>
        <p className="mt-2">Where such transfers occur, E-HUB Energy ensures appropriate safeguards are implemented, including:</p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>European Commission adequacy decisions;</li>
          <li>Standard Contractual Clauses (SCCs);</li>
          <li>other GDPR-compliant transfer mechanisms.</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">9. Data Retention</h4>
        <p>Participation data will generally be retained for:</p>
        <div className="mt-2 space-y-2">
          <p><strong>Giveaway Administration</strong><br/>Up to 12 months following the completion of the Giveaway.</p>
          <p><strong>Winner Documentation</strong><br/>For the period required under applicable accounting, tax or legal obligations.</p>
          <p><strong>Marketing Data</strong><br/>Until you withdraw consent or request deletion, unless a longer retention period is required by law.</p>
        </div>
        <p className="mt-2">After expiration of the relevant retention period, data will be securely deleted or anonymized.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">10. Your Rights Under GDPR</h4>
        <p>Under GDPR you have the right to:</p>
        <ul className="list-none mt-2 space-y-2">
          <li><strong>Right of Access:</strong> Request information about personal data we hold about you.</li>
          <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
          <li><strong>Right to Erasure:</strong> Request deletion of your personal data where legally applicable.</li>
          <li><strong>Right to Restriction:</strong> Request limitation of processing under certain circumstances.</li>
          <li><strong>Right to Data Portability:</strong> Receive your personal data in a structured, commonly used format.</li>
          <li><strong>Right to Object:</strong> Object to processing based on legitimate interests.</li>
          <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time.</li>
          <li><strong>Right to Lodge a Complaint:</strong> You have the right to file a complaint with a competent data protection authority.</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">11. How to Exercise Your Rights</h4>
        <p>To exercise any of your rights, please contact:<br/>
        marketing@e-hub-bess.com</p>
        <p className="mt-2">We will respond to your request within the time limits required under GDPR.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">12. Security Measures</h4>
        <p>E-HUB Energy implements appropriate technical and organizational measures to protect personal data against:</p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>unauthorized access;</li>
          <li>accidental loss;</li>
          <li>misuse;</li>
          <li>disclosure;</li>
          <li>alteration;</li>
          <li>destruction.</li>
        </ul>
        <p className="mt-2">Access to personal data is restricted to authorized personnel who require such access for legitimate business purposes.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">13. Mandatory and Optional Information</h4>
        <p>Providing personal data necessary for participation is voluntary.<br/>
        However, failure to provide required information may prevent participation in the Giveaway or prevent us from contacting the winner.</p>
        <p className="mt-2">Providing consent for marketing communications is entirely optional and is not required to participate in the Giveaway.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">14. Automated Decision-Making</h4>
        <p>E-HUB Energy does not use automated decision-making or profiling that produces legal or similarly significant effects in connection with this Giveaway.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">15. Changes to this Privacy Notice</h4>
        <p>We may update this Privacy Notice from time to time.<br/>
        The latest version will always be available through the Giveaway registration page and at the E-HUB Energy stand during Intersolar Europe 2026.</p>
      </div>

      <div>
        <h4 className="font-bold text-[#0a1825] mb-2">16. Contact</h4>
        <p>If you have questions regarding this Privacy Notice or the processing of your personal data, please contact:</p>
        <p>E-HAB Energy Sp. z o.o.<br/>
        Email: marketing@e-hub-bess.com<br/>
        Address: pl. gen. Walerego Wróblewskiego 3A/7, 50-413 Wrocław, Poland</p>
        <p className="mt-4 font-bold text-[#0a1825]">By submitting your participation form, you acknowledge that you have read and understood this Privacy Notice.</p>
      </div>
    </div>
  );
}
