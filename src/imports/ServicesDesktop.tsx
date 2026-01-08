import svgPaths from "./svg-j4yby6t395";
import clsx from "clsx";
import imgHeroVideo from "figma:asset/bfdb4f567031e00f5c186f3c15e1367b22f9622e.png";
import imgCard from "figma:asset/f48e6415dac8ddb8a6d15f8541547d7656fd1e78.png";
import imgCard1 from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";
import imgFooterImage from "figma:asset/5a1ec8ea6c4524e0727a8833d09e55b05b939353.png";

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">{children}</div>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={clsx("h-[48px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex flex-col items-start justify-end p-[32px] relative size-full">{children}</div>
    </div>
  );
}

function CardBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[630px] min-h-px min-w-px relative rounded-[100px] shrink-0">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[100px] size-full" src={imgCard1} />
        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0 rounded-[100px]" />
      </div>
      <BackgroundImage>{children}</BackgroundImage>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function DividerBackgroundImage() {
  return (
    <div className="bg-[#940c66] h-px relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-2 border-[#940c66] border-solid inset-0 pointer-events-none" />
    </div>
  );
}
type LinkBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function LinkBackgroundImageAndText({ text, additionalClassNames = "" }: LinkBackgroundImageAndTextProps) {
  return (
    <div className={clsx("basis-0 content-stretch flex grow min-h-px min-w-px px-0 py-[8px] relative shrink-0", additionalClassNames)}>
      <p className="basis-0 font-['Poppins:Bold',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#940c66] text-[32px] text-center">{text}</p>
    </div>
  );
}
type ContentBottomBackgroundImageAndTextProps = {
  text: string;
};

function ContentBottomBackgroundImageAndText({ text }: ContentBottomBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[328px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white w-full">{text}</p>
    </div>
  );
}
type ContentTopBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ContentTopBackgroundImageAndText({ text, additionalClassNames = "" }: ContentTopBackgroundImageAndTextProps) {
  return (
    <div className={clsx("content-stretch flex flex-col items-start relative shrink-0 w-[328px]", additionalClassNames)}>
      <p className="font-['Groovy_Font:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[36px] text-white w-full">{text}</p>
    </div>
  );
}

export default function ServicesDesktop() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Services • Desktop">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#d4e5f1] inset-0" />
        <div className="absolute bg-repeat bg-size-[100px_100px] bg-top-left inset-0 opacity-20" style={{ backgroundImage: `url('${imgFooterImage}')` }} />
      </div>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Header">
        <div className="[grid-area:1_/_1] h-[1024px] ml-0 mt-0 pointer-events-none relative w-[1440px]" data-name="Hero Video">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgHeroVideo} />
          <div aria-hidden="true" className="absolute border-0 border-black border-solid inset-0" />
        </div>
        <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0)] content-stretch flex h-[128px] items-start justify-between max-w-[5000px] ml-0 mt-0 overflow-clip px-[100px] py-[10px] relative w-[1440px]" data-name="Navbar">
          <div className="content-stretch flex h-full isolate items-center justify-between relative shrink-0 w-[1240px]" data-name="container">
            <BackgroundImage1 additionalClassNames="w-[127px] z-[3]">
              <div className="absolute left-0 size-[48px] top-0" data-name="Hamburger Menu">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                  <g id="Hamburger Menu">
                    <path d={svgPaths.p28fae880} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </BackgroundImage1>
            <BackgroundImage1 additionalClassNames="w-[140px] z-[2]">
              <div className="absolute aspect-[230.064/253.755] left-[35.81%] overflow-clip right-[33.1%] top-0" data-name="monogram">
                <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 117, 102, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.5257 48.0077">
                    <path d={svgPaths.p12588000} fill="var(--fill-0, #007566)" id="Vector" />
                  </svg>
                </div>
              </div>
              <div className="absolute aspect-[188.37/213.225] left-0 right-[69.73%] top-[calc(50%-0.5px)] translate-y-[-50%]" data-name="Vector">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.3784 47.9702">
                  <path d={svgPaths.p671a080} fill="var(--fill-0, #940C66)" id="Vector" />
                </svg>
              </div>
              <div className="absolute aspect-[170.387/213.502] left-[72.57%] right-0 top-1/2 translate-y-[-50%]" data-name="Vector">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.4054 48.1237">
                  <path d={svgPaths.p3b857dc0} fill="var(--fill-0, #940C66)" id="Vector" />
                </svg>
              </div>
            </BackgroundImage1>
            <div className="bg-[#007566] h-[53px] relative rounded-[60px] shrink-0 w-[127px] z-[1]" data-name="Button">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
                <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">Donate</p>
              </div>
            </div>
          </div>
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-center ml-[75px] mt-[794px] relative" data-name="Container">
          <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Column">
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Content">
              <p className="font-['Groovy_Font:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[192px] text-center text-nowrap text-white">OUR SERVICES</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Header / 82 /">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[64px] py-[112px] relative w-full">
            <div className="content-stretch flex flex-col items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
              <div className="aspect-[1280/720] relative rounded-[10px] shrink-0 w-full" data-name="Placeholder Lightbox">
                <video autoPlay className="absolute max-w-none object-cover rounded-[10px] size-full" controlsList="nodownload" loop playsInline>
                  <source src="/_videos/v1/effe4473378a5f22344753608b8911f21b9ce039" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackgroundImage2>
        <div className="content-stretch flex flex-col items-center px-[100px] py-[112px] relative w-full">
          <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
                <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap">Services</p>
              </div>
              <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-black text-center w-full" data-name="Content">
                <p className="font-['Groovy_Font:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[64px] w-full">Explore Our Service Offerings</p>
                <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.5] relative shrink-0 text-[16px] w-full">We meet people where they are, not where we think they should be.</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-name="Card container">
              <div className="basis-0 grow h-[630px] min-h-px min-w-px relative rounded-[100px] shrink-0" data-name="Card">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[100px] size-full" src={imgCard} />
                  <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0 rounded-[100px]" />
                </div>
                <BackgroundImage>
                  <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0">
                    <ContentTopBackgroundImageAndText text="Yoga" additionalClassNames="h-[47px] justify-between" />
                    <ContentBottomBackgroundImageAndText text="We infuse breath and movement into the lives of those seeking liberation, providing both individual and group yoga sessions that create moments of freedom and connection." />
                  </div>
                </BackgroundImage>
                <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-[100px]" />
              </div>
              <CardBackgroundImage>
                <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0">
                  <ContentTopBackgroundImageAndText text="Trauma-Informed" />
                  <ContentBottomBackgroundImageAndText text="We offer trauma-informed yoga sessions in a safe environment to help individuals reconnect with their bodies and find peace. Our classes support healing and resilience, promoting mindfulness and self-compassion." />
                </div>
              </CardBackgroundImage>
              <CardBackgroundImage>
                <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative shrink-0">
                  <ContentTopBackgroundImageAndText text="Reiki" />
                  <ContentBottomBackgroundImageAndText text="Reiki services provide a nurturing space where energy flows effortlessly, especially for those overlooked by traditional care systems." />
                </div>
              </CardBackgroundImage>
            </div>
          </div>
        </div>
      </BackgroundImage2>
      <BackgroundImage2>
        <div className="content-stretch flex flex-col items-center px-[64px] py-[112px] relative w-full">
          <div className="content-stretch flex flex-col items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Column">
              <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Content">
                <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading">
                  <p className="font-['Groovy_Font:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[64px] text-black text-center w-[768px]">Your healing journey Starts here</p>
                </div>
                <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[16px] text-black text-center w-[min-content]">Transform your life through mindful practices that honor your unique path of recovery and growth.</p>
              </div>
              <div className="content-stretch flex items-start relative shrink-0" data-name="Actions">
                <div className="bg-[#007566] content-stretch flex items-start px-[20px] py-[16px] relative rounded-[60px] shrink-0" data-name="menu item">
                  <p className="font-['Poppins:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Book now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage2>
      <div className="content-stretch flex flex-col h-[1024px] items-center justify-between overflow-clip px-[100px] py-0 relative shrink-0 w-[1440px]" data-name="Footer Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#ffe8e3] inset-0" />
          <div className="absolute bg-repeat bg-size-[100px_100px] bg-top-left inset-0 opacity-20" style={{ backgroundImage: `url('${imgFooterImage}')` }} />
        </div>
        <div className="absolute flex h-[514.149px] items-center justify-center left-[calc(75%+12px)] top-[260px] w-[497.095px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[208.227deg] scale-y-[-100%]">
            {[...Array(2).keys()].map((_, i) => (
              <div className="h-[394.31px] relative w-[352.52px]" data-name="leafline">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352.52 394.31">
                  <g id="leafline" opacity="0.4">
                    <path d={svgPaths.p577aac0} fill="var(--fill-0, #007566)" id="Vector" />
                    <path d={svgPaths.pde95200} fill="var(--fill-0, #007566)" id="Vector_2" />
                    <path d={svgPaths.p116db640} fill="var(--fill-0, #007566)" id="Vector_3" />
                    <path d={svgPaths.p4201d00} fill="var(--fill-0, #007566)" id="Vector_4" />
                    <path d={svgPaths.p36d598c0} fill="var(--fill-0, #007566)" id="Vector_5" />
                    <path d={svgPaths.p5a49c00} fill="var(--fill-0, #007566)" id="Vector_6" />
                    <path d={svgPaths.p2c2faa40} fill="var(--fill-0, #007566)" id="Vector_7" />
                    <path d={svgPaths.p1c5227c0} fill="var(--fill-0, #007566)" id="Vector_8" />
                  </g>
                </svg>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute flex h-[476.403px] items-center justify-center left-[-136px] top-[-68px] w-[447.796px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
          <div className="flex-none rotate-[343.95deg]" />
        </div>
        <div className="content-stretch flex h-[705px] items-center justify-between overflow-clip px-0 py-[112px] relative shrink-0 w-full" data-name="Container">
          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
            <p className="font-['Groovy_Font:Regular',sans-serif] h-[282px] leading-[150px] not-italic relative shrink-0 text-[#940c66] text-[188px] text-center tracking-[1px] w-full">ROSE GARDEN COLLECTIVE</p>
          </div>
        </div>
        <DividerBackgroundImage />
        <div className="content-stretch flex flex-col items-center overflow-clip px-0 py-[60px] relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Links">
              <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Column">
                <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Footer Links">
                  <LinkBackgroundImageAndText text="Who We Are" additionalClassNames="items-center justify-between" />
                  <LinkBackgroundImageAndText text="Programs" additionalClassNames="items-start" />
                  <LinkBackgroundImageAndText text="Services" additionalClassNames="items-start" />
                  <LinkBackgroundImageAndText text="Get Involved" additionalClassNames="items-start" />
                  <a className="basis-0 content-stretch cursor-pointer flex grow items-start min-h-px min-w-px px-0 py-[8px] relative shrink-0" data-name="Link" href="https://chloewilliams.substack.com/">
                    <p className="basis-0 font-['Poppins:Bold',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[#940c66] text-[32px] text-center">Blog</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col h-[54px] items-center justify-between relative shrink-0 w-full" data-name="Credits">
              <DividerBackgroundImage />
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Credits">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Copyright">
                  <p className="[grid-area:1_/_1] font-['Poppins:SemiBold',sans-serif] leading-[1.5] ml-[94px] mt-0 not-italic relative text-[#940c66] text-[14px] text-center text-nowrap translate-x-[-50%]">© 2025 All Rights Reserved</p>
                </div>
                <div className="content-stretch flex font-['Poppins:SemiBold',sans-serif] gap-[20px] items-center not-italic relative shrink-0 text-[#940c66] text-[14px] text-center text-nowrap" data-name="Legal">
                  <a className="block cursor-pointer leading-[0] relative shrink-0" href="https://www.sparkframelabs.com">
                    <p className="[text-underline-position:from-font] decoration-solid leading-[1.5] text-nowrap underline">Credit</p>
                  </a>
                  <p className="[text-underline-position:from-font] decoration-solid leading-[1.5] relative shrink-0 underline">Privacy Policy</p>
                  <p className="[text-underline-position:from-font] decoration-solid leading-[1.5] relative shrink-0 underline">Terms of Service</p>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}