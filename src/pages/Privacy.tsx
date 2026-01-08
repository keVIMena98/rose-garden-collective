import React from 'react';
import { SEO, SEO_CONFIG } from '../components/SEO';

export default function Privacy() {
  return (
    <div className="py-[100px] container mx-auto px-6 max-w-3xl">
      <SEO {...SEO_CONFIG.privacy} />
      <h1 className="text-4xl font-serif font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-stone max-w-none space-y-6 text-muted-foreground">
        <p>Last Updated: December 20, 2025</p>

        <p className="uppercase font-bold">BY USING OR ACCESSING OUR WEBSITE OR BY PROVIDING PERSONAL INFORMATION TO US THROUGH THIS WEBSITE, YOU CONSENT TO THE COLLECTION, USE, AND DISCLOSURE OF THAT INFORMATION IN ACCORDANCE WITH THIS PRIVACY POLICY.</p>

        <h3 className="text-xl font-bold text-foreground mt-8">a. General</h3>
        <p>Rose Garden Collective (RGC) (“RGC,” “we,” “us,” or “our”) respects the privacy of individuals who visit our website, rosegardencollective.com, or any affiliated site linked to this Privacy Policy (collectively, the “Website”). This Privacy Policy explains how we collect, use, and share your personal information, as well as the steps we take to protect your data.</p>
        <p>“Personal Information” means any information that can identify you directly or indirectly, such as your name, email address, telephone number, postal address, or any details specific to your identity or preferences.</p>
        <p>By using or accessing the Website, you agree to this Privacy Policy. If you do not agree with its terms, please discontinue use of the Website. RGC may update or revise this Privacy Policy at any time, and updates will take effect immediately upon posting. Users are encouraged to review this page periodically for changes.</p>
        <p>The data controller for this Website is Rose Garden Collective, registered in the Cayman Islands. For questions, please contact us at <a href="mailto:hello@rosegardencollective.com" className="text-primary hover:underline">hello@rosegardencollective.com</a>.</p>

        <h3 className="text-xl font-bold text-foreground mt-8">b. Information We Collect and How We Use It</h3>
        
        <h4 className="font-bold text-foreground mt-4">Information You Provide</h4>
        <p>You may browse the Website without submitting personal information. We collect personal data only when you voluntarily provide it—for example, when you contact us, subscribe to our newsletter, register for events, or participate in RGC programs.</p>
        
        <p>Collected information may include:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li>Name and contact details.</li>
            <li>Mailing address or country of residence.</li>
            <li>Payment or donation details (if applicable).</li>
            <li>Information shared during inquiries, surveys, or event sign-ups.</li>
        </ul>

        <h4 className="font-bold text-foreground mt-4">Social Media Interaction</h4>
        <p>If you engage with our Website via social media (for example, by sharing posts or commenting), your interactions may include information shared publicly or accessible through your social network settings. Please review your platform’s privacy preferences for control over such sharing.</p>

        <h4 className="font-bold text-foreground mt-4">Account Creation</h4>
        <p>To participate in some RGC programs or community features, you may need to create an account using your name, email address, and password. You are responsible for maintaining the confidentiality of your login details and must notify us of any unauthorized use.</p>

        <h4 className="font-bold text-foreground mt-4">Financial Transactions</h4>
        <p>If you make a donation or purchase event-related materials, we may collect payment details through secure third-party payment processors. Your financial data is processed only as necessary to complete authorized transactions.</p>

        <h3 className="text-xl font-bold text-foreground mt-8">c. Use and Retention of Personal Information</h3>
        <p>We use your information for purposes consistent with RGC’s nonprofit mission, including:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li>Responding to inquiries and providing requested services.</li>
            <li>Improving user experience and website functionality.</li>
            <li>Managing event or class participation.</li>
            <li>Sending updates about community programs, events, or newsletters.</li>
            <li>Processing payments and maintaining donation records.</li>
            <li>Complying with legal obligations or responding to regulatory requests.</li>
        </ul>
        <p>Personal data is stored only as long as necessary to fulfill these purposes or as required by law.</p>

        <h3 className="text-xl font-bold text-foreground mt-8">d. Automatically Collected Information</h3>
        <h4 className="font-bold text-foreground mt-4">Log Data and Cookies</h4>
        <p>We collect general web analytics information such as IP addresses, browser type, device identifiers, and pages visited to improve site functionality. The Website may use cookies to remember preferences, customize content, and measure traffic patterns.</p>
        <p>You can adjust your browser settings to reject or delete cookies, but doing so may affect functionality or limit access to certain features.</p>
        <p>We use common analytics tools, including Google Analytics, to understand visitor behavior. For information on how to opt out, visit <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">tools.google.com/dlpage/gaoptout</a>.</p>

        <h3 className="text-xl font-bold text-foreground mt-8">e. Sharing of Personal Information</h3>
        <p>RGC does not sell or rent personal data. We may share information only in the following cases:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li>With trusted service providers who support RGC operations (e.g., website hosting, email distribution, event registration).</li>
            <li>To comply with legal requirements or respond to lawful government or law enforcement requests.</li>
            <li>In connection with organizational restructuring or collaborations that align with RGC’s mission.</li>
            <li>As aggregated or anonymized data used for research or reporting purposes.</li>
        </ul>
        <p>All third parties handling such data are contractually required to maintain confidentiality and ensure data security.</p>

        <h3 className="text-xl font-bold text-foreground mt-8">f. Publicly Displayed or Shared Information</h3>
        <p>If you create a community profile, post in a forum, or participate in online group discussions hosted by RGC, please note that this information may be visible to others. Exercise discretion when sharing personal details in public sections of our Website.</p>

        <h3 className="text-xl font-bold text-foreground mt-8">g. Communications and Opt-Out Options</h3>
        <p>RGC may send you updates or newsletters related to yoga programs, mindfulness initiatives, or collective events. You may unsubscribe from promotional communications at any time by clicking the “unsubscribe” link in our emails or contacting <a href="mailto:hello@rosegardencollective.com" className="text-primary hover:underline">hello@rosegardencollective.com</a>.</p>
        <p>Note: Even if you opt out, we may still send essential administrative or transactional communications.</p>

        <h3 className="text-xl font-bold text-foreground mt-8">h. Security</h3>
        <p>We use appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These include encryption, secure servers, and restricted internal data access.</p>
        <p>While we take reasonable precautions, no online system is completely secure. Users transmit information at their own risk.</p>

        <h3 className="text-xl font-bold text-foreground mt-8">i. Third-Party Links</h3>
        <p>The Website may contain links to third-party websites or platforms. RGC is not responsible for their content or privacy practices. Users should review those websites’ privacy policies before providing personal information.</p>

        <h3 className="text-xl font-bold text-foreground mt-8">j. Children’s Privacy</h3>
        <p>Our Website and services are not intended for children under 13. We do not knowingly collect personal information from minors. If a parent or guardian believes that a child has provided personal information, please contact us to have such information deleted.</p>

        <h3 className="text-xl font-bold text-foreground mt-8">k. Global Access and Data Transfer</h3>
        <p>As an organization serving a global community, we may store or process information on servers located outside your country of residence, including in the Cayman Islands or other jurisdictions. By submitting your information, you consent to such transfer and processing in accordance with this Policy.</p>

        <h3 className="text-xl font-bold text-foreground mt-8">l. Governing Law</h3>
        <p>This Privacy Policy and its interpretation shall be governed by the laws of the Cayman Islands. Any disputes will be subject to the exclusive jurisdiction of the Cayman Islands courts.</p>

        <h3 className="text-xl font-bold text-foreground mt-8">m. Contact</h3>
        <p>For questions about this Privacy Policy or your personal data, please contact:</p>
        <p className="mt-4">
            <strong>Rose Garden Collective (RGC)</strong><br />
            Email: <a href="mailto:hello@rosegardencollective.com" className="text-primary hover:underline">hello@rosegardencollective.com</a><br />
            Mailing Address: George Town, Grand Cayman, Cayman Islands<br />
            Website: <a href="https://rosegardencollective.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">rosegardencollective.com</a>
        </p>

        <h3 className="text-xl font-bold text-foreground mt-8">n. Offline and Other Privacy</h3>
        <p>If RGC collects personal information outside of this Website (e.g., via email, event registration, or phone), the same principles outlined here apply. Information collected offline is used solely for RGC activities, member engagement, and administrative purposes, and will not be shared except as outlined above.</p>
      </div>
    </div>
  );
}
