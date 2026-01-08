import svgPaths from "./svg-ew22re0meb";

export default function NavbarMobile() {
  return (
    <div className="relative size-full" data-name="navbar - mobile">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[30px] py-0 relative size-full">
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
      </div>
    </div>
  );
}