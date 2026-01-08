import svgPaths from "./svg-g3ox1p5vld";
import clsx from "clsx";
import imgHeroVideo from "figma:asset/a1dcf49fd76d3652a41b6d3d24348be9357a348b.png";
import imgVector from "figma:asset/546794d561220d1937fa9400a9bc860b063c4d32.png";
import imgVector1 from "figma:asset/b1ef8a4b145ccf4170fca100c8721f6da17b83e2.png";
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

export default function WhoWeAreMobile() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Who We Are • Mobile">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#d4e5f1] inset-0" />
        <div className="absolute bg-repeat bg-size-[1024px_1024px] bg-top-left inset-0 opacity-20" style={{ backgroundImage: `url('${imgFooterImage}')` }} />
      </div>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Header">
        <div className="[grid-area:1_/_1] h-[844px] ml-0 mt-0 pointer-events-none relative w-[390px]" data-name="Hero Video">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgHeroVideo} />
          <div aria-hidden="true" className="absolute border-0 border-black border-solid inset-0" />
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col h-[84px] items-center justify-center ml-0 mt-0 px-[30px] py-0 relative w-[390px]" data-name="Navbar">
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
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-center max-w-[1280px] ml-[20px] mt-[767px] relative w-[350px]" data-name="Container">
          <div className="content-stretch flex flex-col items-center max-w-[768px] relative shrink-0 w-full" data-name="Column">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
              <p className="font-['Groovy_Font:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[64px] text-center text-white w-full">OUR STORY</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Layout / 1 /">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[30px] py-[64px] relative w-full">
            <div className="content-stretch flex flex-col items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Component">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content Left">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section Title">
                    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-black w-full" data-name="Content">
                      <p className="font-['Groovy_Font:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[36px] w-full">What Is Rose Garden Collective?</p>
                      <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.5] relative shrink-0 text-[16px] w-full">Rose Garden is a spiritual space that centers healing regardless of the cost. We partner with many non-profit organizations in the community to offer yoga and Reiki to their communities, and deliver yoga classes in the greater community to build awareness. Building community is at the heart of what we do, and every person, whether a giver or receiver is integral to delivering the mission.</p>
                    </div>
                  </div>
                </div>
                <div className="aspect-[636.246/630.032] relative shrink-0 w-full" data-name="Vector">
                  <img alt="" className="block max-w-none size-full" height="326.777" src={imgVector} width="330" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Layout / 413 /">
        <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center px-[30px] py-[64px] relative w-full">
            <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Component">
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Content">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section Title">
                      <div className="content-stretch flex flex-col gap-[20px] items-start leading-[1.5] not-italic relative shrink-0 text-black w-full" data-name="Content">
                        <p className="font-['Groovy_Font:Regular',sans-serif] relative shrink-0 text-[48px] w-full">The Garden Founder</p>
                        <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[14px] w-full">{`Hi, my name is Chloe. I founded Rose Garden Collective as a former high school educator and yoga instructor who is deeply passionate about community well-being and social justice. My mission is to share healing practices such as yoga and Reiki with anyone who seeks them, regardless of the cost. I specialize in trauma-informed yoga therapy, which dives more deeply into the emotional, spiritual, and mental levels of yoga rather than just the physical. In my classes, we focus on body awareness, building mindfulness techniques, and coming "home" to our bodies through breathing techniques, soft movement, and meditations.`}</p>
                      </div>
                    </div>
                  </div>
                  <a className="bg-[#007566] content-stretch cursor-pointer flex items-start px-[20px] py-[16px] relative rounded-[60px] shrink-0" data-name="menu item" href="https://www.linkedin.com/in/chloe-williams-b56395166/">
                    <p className="font-['Poppins:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-white">Connect</p>
                  </a>
                </div>
                <div className="aspect-[686.09/632.242] relative shrink-0 w-full" data-name="Vector">
                  <img alt="" className="block max-w-none size-full" height="304.1" src={imgVector1} width="330" />
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