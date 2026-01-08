import svgPaths from "./svg-ax72svi9xc";
import clsx from "clsx";
import imgFooterImage from "figma:asset/5a1ec8ea6c4524e0727a8833d09e55b05b939353.png";
type DividerBackgroundImageProps = {
  additionalClassNames?: string;
};

function DividerBackgroundImage({ additionalClassNames = "" }: DividerBackgroundImageProps) {
  return (
    <div className={clsx("bg-[#940c66] h-px relative shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-2 border-[#940c66] border-solid inset-0 pointer-events-none" />
    </div>
  );
}
type LinkBackgroundImageAndTextProps = {
  text: string;
};

function LinkBackgroundImageAndText({ text }: LinkBackgroundImageAndTextProps) {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full">
      <p className="font-['Poppins:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#940c66] text-[24px] text-center text-nowrap">{text}</p>
    </div>
  );
}

export default function TermsOfServiceMobile() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Terms of Service • Mobile">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#d4e5f1] inset-0" />
        <div className="absolute bg-repeat bg-size-[1024px_1024px] bg-top-left inset-0 opacity-20" style={{ backgroundImage: `url('${imgFooterImage}')` }} />
      </div>
      <div className="content-stretch flex flex-col h-[84px] items-center justify-center px-[30px] py-0 relative shrink-0 w-[390px]" data-name="navbar - mobile">
        <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
          <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px overflow-clip relative shrink-0" data-name="Column">
            <div className="h-[48px] relative shrink-0 w-[91px]" data-name="Container">
              <div className="absolute left-0 size-[48px] top-0" data-name="Hamburger Menu">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                  <g id="Hamburger Menu">
                    <path d={svgPaths.p28fae880} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="h-[36px] relative shrink-0 w-[105px]" data-name="logo/Short">
              <div className="absolute aspect-[230.064/253.755] left-[47.75%] overflow-clip right-[10.8%] top-0" data-name="monogram">
                <div className="absolute inset-[0_-205.57%_-206.2%_0]" data-name="Vector">
                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 117, 102, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 147">
                      <path d={svgPaths.pd64f100} fill="var(--fill-0, #007566)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute aspect-[188.37/213.225] left-0 right-[59.64%] top-[calc(50%+5.5px)] translate-y-[-50%]" data-name="Vector">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.3784 47.9702">
                  <path d={svgPaths.p671a080} fill="var(--fill-0, #940C66)" id="Vector" />
                </svg>
              </div>
              <div className="absolute aspect-[170.387/213.502] left-[96.76%] right-[-33.33%] top-[calc(50%+6px)] translate-y-[-50%]" data-name="Vector">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.4054 48.1237">
                  <path d={svgPaths.p3b857dc0} fill="var(--fill-0, #940C66)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Content / 7 /">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start px-[20px] py-[30px] relative w-full">
            <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[768px] relative shrink-0 w-full" data-name="Content">
                <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[36px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Terms of Service
                </p>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Rich Text">
                  <div className="content-stretch flex flex-col items-start pb-[16px] pt-0 px-0 relative shrink-0 w-full" data-name="Content">
                    <div className="font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[0px] text-[16px] text-black w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="mb-0">
                        <span className="font-['Roboto:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Last Updated:
                        </span>
                        <span>{` Insert Date`}</span>
                      </p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="mb-0">BY USING OR ACCESSING OUR WEBSITE OR DOWNLOADING MATERIALS FROM OUR WEBSITE, YOU AGREE TO BE LEGALLY BOUND BY THESE TERMS OF USE.</p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="mb-0">
                        <span>{`This Terms of Use Agreement (“Agreement”) is a legal agreement between you and `}</span>
                        <span className="font-['Roboto:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Rose Garden Collective (RGC)
                        </span>
                        , a nonprofit organization registered in the Cayman Islands (“RGC,” “we,” “us,” or “our”), governing your use of this website, rosegardencollective.org, or any affiliated platform linked to this Agreement (the “Website”). By accessing, viewing, using, or downloading materials from the Website, you agree to be bound by all terms, conditions, and notices contained or referenced herein.
                      </p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="font-['Roboto:Bold',sans-serif] font-bold mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Updates to this Agreement
                      </p>
                      <p className="mb-0">RGC may revise or update this Agreement and the content on the Website at any time without notice. Updates take effect immediately upon posting. The “Last Updated” date above indicates the latest revision. Continued use of the Website after any such updates signifies acceptance of the revised Agreement. Users who do not accept these terms must discontinue use of the Website.</p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="font-['Roboto:Bold',sans-serif] font-bold mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                        User-Submitted Information and Grant of License
                      </p>
                      <p className="mb-0">Users are responsible for all information, materials, or content (“Content”) they submit through the Website. By submitting Content to RGC, you warrant that it is truthful, accurate, and submitted in good faith. Do not send confidential or proprietary material unless requested.</p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="mb-0">By submitting Content (excluding personally identifiable information), you grant RGC a royalty-free, perpetual, worldwide license to use, reproduce, modify, publish, translate, and distribute such Content in any form or media. You also grant other Website users a non-exclusive license to view or share your Content as permitted through the site’s functionality.</p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="mb-0">Users must not upload or transmit Content that is illegal, defamatory, obscene, hateful, or otherwise violates law or the rights of others. Violations may result in removal of content or suspension of access.</p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="font-['Roboto:Bold',sans-serif] font-bold mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Account Creation
                      </p>
                      <p className="mb-0">Certain Website features may require an account. You agree to provide accurate information, maintain confidentiality of your login credentials, and promptly notify RGC of unauthorized access. You are liable for activities under your account. RGC disclaims responsibility for any losses resulting from your failure to secure your information.</p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="font-['Roboto:Bold',sans-serif] font-bold mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Interactive Features
                      </p>
                      <p className="mb-0">RGC may host community spaces such as message boards, discussion groups, or class listings. These are public spaces—exercise discretion when sharing personal details. RGC may moderate or remove content that violates this Agreement or community guidelines.</p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="font-['Roboto:Bold',sans-serif] font-bold mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                        User Conduct
                      </p>
                      <p className="mb-0">You agree not to misuse the Website or engage in activities such as impersonation, harassment, data harvesting, spamming, or uploading malicious software. Violations may result in restriction or termination of access.</p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="font-['Roboto:Bold',sans-serif] font-bold mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Website Security
                      </p>
                      <p className="mb-0">Unauthorized access or interference with the Website is prohibited. Suspected violations may be reported to law enforcement and result in prosecution.</p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="font-['Roboto:Bold',sans-serif] font-bold mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Intellectual Property
                      </p>
                      <p className="mb-0">All content on the Website, including text, graphics, photos, and design elements, belongs to RGC or its licensors and is protected by copyright and intellectual property laws. Content may not be copied, modified, or distributed without written consent from RGC, except for non-commercial, personal use consistent with these Terms.</p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="mb-0">
                        <span>{`The `}</span>
                        <span className="font-['Roboto:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Rose Garden Collective
                        </span>
                        <span>{` name, logo, and related marks are trademarks of RGC. Unauthorized use is strictly prohibited.`}</span>
                      </p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="font-['Roboto:Bold',sans-serif] font-bold mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Notice of Copyright Infringement
                      </p>
                      <p className="mb-0">If you believe any material on this Website infringes your copyright, notify RGC with:</p>
                      <p className="mb-0">{`	•	Identification of the copyrighted work`}</p>
                      <p className="mb-0">{`	•	Location (URL) of the infringing material`}</p>
                      <p className="mb-0">{`	•	Your contact information`}</p>
                      <p className="mb-0">{`	•	A statement of good faith belief that use is unauthorized`}</p>
                      <p className="mb-0">{`	•	Your electronic or physical signature`}</p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="mb-0">Contact:</p>
                      <p className="font-['Roboto:Bold',sans-serif] font-bold mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Rose Garden Collective (RGC)
                      </p>
                      <p className="mb-0">Email: hello@rosegardencollective.com</p>
                      <p className="mb-0">Address: Insert local Cayman Islands address</p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="font-['Roboto:Bold',sans-serif] font-bold mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Links to Third-Party Websites
                      </p>
                      <p className="mb-0">The Website may include links to third-party sites for convenience. RGC does not endorse or control these websites and assumes no responsibility for their content or practices. Access such sites at your own risk.</p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="font-['Roboto:Bold',sans-serif] font-bold mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Disclaimer of Warranty
                      </p>
                      <p className="mb-0">The Website and its content are provided “as is” and “as available.” RGC makes no warranties regarding the accuracy, reliability, or suitability of the information provided. To the fullest extent permitted by Cayman Islands law, RGC disclaims all implied warranties, including fitness for a particular purpose and non-infringement.</p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="font-['Roboto:Bold',sans-serif] font-bold mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Limitation of Liability
                      </p>
                      <p className="mb-0">RGC and its affiliates will not be liable for any damages arising from use of or inability to use the Website, including indirect, incidental, or consequential damages, to the extent permitted by law.</p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="font-['Roboto:Bold',sans-serif] font-bold mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Indemnity
                      </p>
                      <p className="mb-0">You agree to defend, indemnify, and hold harmless RGC, its directors, volunteers, and affiliates from any claims, damages, or losses arising from your use of the Website or breach of this Agreement.</p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="font-['Roboto:Bold',sans-serif] font-bold mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Children
                      </p>
                      <p className="mb-0">This Website is not intended for individuals under 13 years of age. By using the site, you affirm that you are over 13.</p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="font-['Roboto:Bold',sans-serif] font-bold mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Effect of Invalidity
                      </p>
                      <p className="mb-0">If any portion of this Agreement is held invalid, the remaining provisions shall continue to be enforceable and in effect.</p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="font-['Roboto:Bold',sans-serif] font-bold mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>{`Governing Law & Jurisdiction`}</p>
                      <p className="mb-0">This Agreement shall be governed by and interpreted in accordance with the laws of the Cayman Islands. Any disputes arising under or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts of the Cayman Islands.</p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="font-['Roboto:Bold',sans-serif] font-bold mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Contact
                      </p>
                      <p className="mb-0">Questions or concerns about these Terms may be directed to:</p>
                      <p className="mb-0">&nbsp;</p>
                      <p className="font-['Roboto:Bold',sans-serif] font-bold mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
                        Rose Garden Collective (RGC)
                      </p>
                      <p className="mb-0">Email: hello@rosegardencollective.com</p>
                      <p className="mb-0">Mailing Address: Insert local mailing address</p>
                      <p>Website: rosegardencollective.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[844px] items-center overflow-clip px-[30px] py-0 relative shrink-0 w-[390px]" data-name="Footer Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#ffe8e3] inset-0" />
          <div className="absolute bg-repeat bg-size-[1024px_1024px] bg-top-left inset-0 opacity-20" style={{ backgroundImage: `url('${imgFooterImage}')` }} />
        </div>
        <div className="absolute flex h-[213.19px] items-center justify-center left-[-59px] top-[-35px] w-[202.478px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[339.884deg]">
            {[...Array(2).keys()].map((_, i) => (
              <div className="h-[171px] relative w-[153px]" data-name="leafline">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153 171">
                  <g id="leafline" opacity="0.4">
                    <path d={svgPaths.p202f8f84} fill="var(--fill-0, #007566)" id="Vector" />
                    <path d={svgPaths.p137b9340} fill="var(--fill-0, #007566)" id="Vector_2" />
                    <path d={svgPaths.p3bda0000} fill="var(--fill-0, #007566)" id="Vector_3" />
                    <path d={svgPaths.p27871c80} fill="var(--fill-0, #007566)" id="Vector_4" />
                    <path d={svgPaths.p143dd840} fill="var(--fill-0, #007566)" id="Vector_5" />
                    <path d={svgPaths.p8969500} fill="var(--fill-0, #007566)" id="Vector_6" />
                    <path d={svgPaths.p3c4f9080} fill="var(--fill-0, #007566)" id="Vector_7" />
                    <path d={svgPaths.p303a1100} fill="var(--fill-0, #007566)" id="Vector_8" />
                  </g>
                </svg>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute flex h-[221.896px] items-center justify-center left-[calc(50%+42px)] top-[96px] w-[214.061px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[207.072deg] scale-y-[-100%]" />
        </div>
        <div className="content-stretch flex flex-col items-center overflow-clip px-0 py-[52px] relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
            <p className="font-['Groovy_Font:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#940c66] text-[52px] text-center w-full">ROSE GARDEN COLLECTIVE</p>
          </div>
        </div>
        <DividerBackgroundImage additionalClassNames="w-[330px]" />
        <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip px-0 py-[20px] relative shrink-0 w-full" data-name="Container">
          <div className="basis-0 content-stretch flex flex-col gap-[48px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
            <div className="basis-0 content-stretch flex flex-col grow items-center justify-between min-h-px min-w-px relative shrink-0 w-full" data-name="Links">
              <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Column">
                <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Footer Links">
                  <LinkBackgroundImageAndText text="Who We Are" />
                  <LinkBackgroundImageAndText text="Programs" />
                  <LinkBackgroundImageAndText text="Services" />
                  <LinkBackgroundImageAndText text="Get Involved" />
                  <a className="basis-0 content-stretch cursor-pointer flex grow items-center justify-center min-h-px min-w-px px-0 py-[8px] relative shrink-0 w-full" data-name="Link" href="https://www.tiktok.com/@cwillyamz">
                    <p className="font-['Poppins:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#940c66] text-[24px] text-center text-nowrap">Blog</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Credits">
              <DividerBackgroundImage additionalClassNames="w-full" />
              <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Row">
                <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Credits">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Socials">
                    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Social Links">
                      <div className="relative shrink-0 size-[20px]" data-name="Facebook">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="Facebook">
                            <path d={svgPaths.p2c56c980} fill="var(--fill-0, #940C66)" id="Vector" />
                          </g>
                        </svg>
                      </div>
                      <a className="block cursor-pointer relative shrink-0 size-[20px]" data-name="Instagram" href="https://www.instagram.com/rosegardencollective/">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="Vector">
                            <path d={svgPaths.pb229780} fill="var(--fill-0, #940C66)" id="Vector_2" />
                            <path d={svgPaths.p148c9940} fill="var(--fill-0, #940C66)" id="Vector_3" />
                          </g>
                        </svg>
                      </a>
                      <a className="block cursor-pointer relative shrink-0 size-[20px]" data-name="TikTok" href="https://www.tiktok.com/@cwillyamz">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="TikTok">
                            <path d={svgPaths.p1a40f580} fill="var(--fill-0, #940C66)" id="Vector" />
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Copyright">
                    <p className="[grid-area:1_/_1] font-['Poppins:SemiBold',sans-serif] leading-[1.5] ml-[165px] mt-0 not-italic relative text-[#940c66] text-[12px] text-center translate-x-[-50%] w-[330px]">© 2025 All Rights Reserved</p>
                  </div>
                  <div className="content-stretch flex font-['Poppins:SemiBold',sans-serif] gap-[27px] items-center justify-center not-italic relative shrink-0 text-[#940c66] text-[12px] text-center text-nowrap" data-name="Legal">
                    <a className="block cursor-pointer leading-[0] relative shrink-0" href="https://www.sparkframelabs.com">
                      <p className="[text-underline-position:from-font] decoration-solid leading-[1.5] text-nowrap underline">Credit</p>
                    </a>
                    <p className="leading-[1.5] relative shrink-0">Privacy Policy</p>
                    <p className="leading-[1.5] relative shrink-0">Terms of Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}