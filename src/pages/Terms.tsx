import React from 'react';
import bgTexture from "figma:asset/5a1ec8ea6c4524e0727a8833d09e55b05b939353.png";
import { SEO, SEO_CONFIG } from '../components/SEO';

export default function Terms() {
  return (
    <div className="relative w-full min-h-screen bg-[#d4e5f1] text-black font-['Roboto']">
      <SEO {...SEO_CONFIG.terms} />
      {/* Background Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ 
          backgroundImage: `url(${bgTexture})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '1024px 1024px',
          backgroundPosition: 'top left'
        }}
      />

      <div className="relative z-10 w-full flex flex-col items-center px-6 md:px-[64px] py-[40px] md:py-[112px]">
        {/* Content Container */}
        <div className="w-full max-w-[768px] flex flex-col gap-6 md:gap-[24px]">
          
          {/* Title */}
          <h1 className="font-bold text-[36px] md:text-[48px] leading-[1.2] text-center md:text-left w-full">
            Terms of Service
          </h1>

          {/* Content Body */}
          <div className="flex flex-col gap-6 text-[16px] leading-[1.6] text-muted-foreground">
            
            <p>
              <span className="font-bold text-foreground">Last Updated:</span> December 20, 2025
            </p>

            <p className="uppercase font-bold text-foreground">
              BY USING OR ACCESSING OUR WEBSITE OR DOWNLOADING MATERIALS FROM OUR WEBSITE, YOU AGREE TO BE LEGALLY BOUND BY THESE TERMS OF USE.
            </p>

            <p>
              This Terms of Use Agreement (“Agreement”) is a legal agreement between you and Rose Garden Collective (RGC), a nonprofit organization registered in the Cayman Islands (“RGC,” “we,” “us,” or “our”), governing your use of this website, rosegardencollective.org, or any affiliated platform linked to this Agreement (the “Website”). By accessing, viewing, using, or downloading materials from the Website, you agree to be bound by all terms, conditions, and notices contained or referenced herein.
            </p>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Updates to this Agreement</h3>
              <p>RGC may revise or update this Agreement and the content on the Website at any time without notice. Updates take effect immediately upon posting. The “Last Updated” date above indicates the latest revision. Continued use of the Website after any such updates signifies acceptance of the revised Agreement. Users who do not accept these terms must discontinue use of the Website.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">User-Submitted Information and Grant of License</h3>
              <p className="mb-4">Users are responsible for all information, materials, or content (“Content”) they submit through the Website. By submitting Content to RGC, you warrant that it is truthful, accurate, and submitted in good faith. Do not send confidential or proprietary material unless requested.</p>
              <p className="mb-4">By submitting Content (excluding personally identifiable information), you grant RGC a royalty-free, perpetual, worldwide license to use, reproduce, modify, publish, translate, and distribute such Content in any form or media. You also grant other Website users a non-exclusive license to view or share your Content as permitted through the site’s functionality.</p>
              <p>Users must not upload or transmit Content that is illegal, defamatory, obscene, hateful, or otherwise violates law or the rights of others. Violations may result in removal of content or suspension of access.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Account Creation</h3>
              <p>Certain Website features may require an account. You agree to provide accurate information, maintain confidentiality of your login credentials, and promptly notify RGC of unauthorized access. You are liable for activities under your account. RGC disclaims responsibility for any losses resulting from your failure to secure your information.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Interactive Features</h3>
              <p>RGC may host community spaces such as message boards, discussion groups, or class listings. These are public spaces—exercise discretion when sharing personal details. RGC may moderate or remove content that violates this Agreement or community guidelines.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">User Conduct</h3>
              <p>You agree not to misuse the Website or engage in activities such as impersonation, harassment, data harvesting, spamming, or uploading malicious software. Violations may result in restriction or termination of access.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Website Security</h3>
              <p>Unauthorized access or interference with the Website is prohibited. Suspected violations may be reported to law enforcement and result in prosecution.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Intellectual Property</h3>
              <p className="mb-4">All content on the Website, including text, graphics, photos, and design elements, belongs to RGC or its licensors and is protected by copyright and intellectual property laws. Content may not be copied, modified, or distributed without written consent from RGC, except for non-commercial, personal use consistent with these Terms.</p>
              <p>The Rose Garden Collective name, logo, and related marks are trademarks of RGC. Unauthorized use is strictly prohibited.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Notice of Copyright Infringement</h3>
              <p className="mb-2">If you believe any material on this Website infringes your copyright, notify RGC with:</p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Identification of the copyrighted work</li>
                <li>Location (URL) of the infringing material</li>
                <li>Your contact information</li>
                <li>A statement of good faith belief that use is unauthorized</li>
                <li>Your electronic or physical signature</li>
              </ul>
              <div className="mt-4">
                <p className="mb-1 font-bold text-foreground">Contact:</p>
                <p>Rose Garden Collective (RGC)</p>
                <p>Email: <a href="mailto:hello@rosegardencollective.com" className="text-primary hover:underline">hello@rosegardencollective.com</a></p>
                <p>Address: Insert local Cayman Islands address</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Links to Third-Party Websites</h3>
              <p>The Website may include links to third-party sites for convenience. RGC does not endorse or control these websites and assumes no responsibility for their content or practices. Access such sites at your own risk.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Disclaimer of Warranty</h3>
              <p>The Website and its content are provided “as is” and “as available.” RGC makes no warranties regarding the accuracy, reliability, or suitability of the information provided. To the fullest extent permitted by Cayman Islands law, RGC disclaims all implied warranties, including fitness for a particular purpose and non-infringement.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Limitation of Liability</h3>
              <p>RGC and its affiliates will not be liable for any damages arising from use of or inability to use the Website, including indirect, incidental, or consequential damages, to the extent permitted by law.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Indemnity</h3>
              <p>You agree to defend, indemnify, and hold harmless RGC, its directors, volunteers, and affiliates from any claims, damages, or losses arising from your use of the Website or breach of this Agreement.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Children</h3>
              <p>This Website is not intended for individuals under 13 years of age. By using the site, you affirm that you are over 13.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Effect of Invalidity</h3>
              <p>If any portion of this Agreement is held invalid, the remaining provisions shall continue to be enforceable and in effect.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Governing Law & Jurisdiction</h3>
              <p>This Agreement shall be governed by and interpreted in accordance with the laws of the Cayman Islands. Any disputes arising under or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts of the Cayman Islands.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Contact</h3>
              <p className="mb-4">Questions or concerns about these Terms may be directed to:</p>
              <div className="space-y-1">
                <p className="font-bold text-foreground">Rose Garden Collective (RGC)</p>
                <p>Email: <a href="mailto:hello@rosegardencollective.com" className="text-primary hover:underline">hello@rosegardencollective.com</a></p>
                <p>Mailing Address: Insert local mailing address</p>
                <p>Website: <a href="https://rosegardencollective.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">rosegardencollective.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="font-bold text-[18px] md:text-[20px] mb-2">{title}</h3>
      <div className="text-[16px] leading-[1.5]">
        {children}
      </div>
    </div>
  );
}
