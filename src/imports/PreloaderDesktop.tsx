import svgPaths from "./svg-8obrw2hd5l";
import imgPreloaderDesktop from "figma:asset/5a1ec8ea6c4524e0727a8833d09e55b05b939353.png";

export default function PreloaderDesktop() {
  return (
    <div className="relative size-full" data-name="Preloader - Desktop">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#d4e5f1] inset-0" />
        <div className="absolute bg-repeat bg-size-[1024px_1024px] bg-top-left inset-0 opacity-20" style={{ backgroundImage: `url('${imgPreloaderDesktop}')` }} />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[100px] py-[65px] relative size-full">
          <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0" data-name="Container">
            <div className="[grid-area:1_/_1] h-[48px] ml-[550px] mt-0 relative w-[140px]" data-name="logo/Short">
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
            </div>
            <div className="[grid-area:1_/_1] h-[249.085px] ml-[516px] mt-[336.81px] relative w-[208px]" data-name="monogram">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208 249.085">
                <g clipPath="url(#clip0_7_516)" id="monogram">
                  <path d={svgPaths.p214edc80} fill="var(--fill-0, #007566)" id="Vector" />
                </g>
                <defs>
                  <clipPath id="clip0_7_516">
                    <rect fill="white" height="249.085" width="208" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="[grid-area:1_/_1] font-['Poppins:SemiBold',sans-serif] h-[94.219px] leading-[1.2] ml-0 mt-[799.78px] not-italic relative text-[#940c66] text-[24px] w-[501px]">WELCOME TO ROSE GARDEN COLLECTIVE - A SPIRITUAL SPACE FOR COLLECTIVE WELLBEING.</p>
            <p className="[grid-area:1_/_1] font-['Poppins:SemiBold',sans-serif] h-[31.406px] leading-[1.2] ml-[1198px] mt-[862.05px] not-italic relative text-[#940c66] text-[24px] text-center translate-x-[-50%] w-[84px]">© 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}