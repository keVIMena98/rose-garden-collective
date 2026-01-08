import svgPaths from "./svg-5qy4seolax";
import clsx from "clsx";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("h-[48px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between relative size-full" data-name="Header">
      <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/effe4473378a5f22344753608b8911f21b9ce039" />
      </video>
      <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[128px] items-start justify-between max-w-[5000px] overflow-clip px-[100px] py-[10px] relative shrink-0 w-[1440px]" data-name="Navbar">
        <div className="content-stretch flex h-full isolate items-center justify-between relative shrink-0 w-[1240px]" data-name="container">
          <Wrapper additionalClassNames="w-[127px] z-[3]">
            <div className="absolute left-0 size-[48px] top-0" data-name="Hamburger Menu">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                <g id="Hamburger Menu">
                  <path d={svgPaths.p28fae880} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </Wrapper>
          <Wrapper additionalClassNames="w-[140px] z-[2]">
            <div className="absolute aspect-[230.064/253.755] left-[35.81%] overflow-clip right-[33.1%] top-0" data-name="monogram">
              <div className="absolute inset-[0_-205.57%_-206.2%_0]" data-name="Vector">
                <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 117, 102, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 147">
                    <path d={svgPaths.pd64f100} fill="var(--fill-0, #007566)" id="Vector" />
                  </svg>
                </div>
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
          </Wrapper>
          <div className="bg-[#007566] h-[53px] relative rounded-[60px] shrink-0 w-[127px] z-[1]" data-name="Button">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[32px] py-[16px] relative size-full">
              <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">Donate</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Container">
        <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Column">
          <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Content">
            <p className="font-['Groovy_Font:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[192px] text-center text-nowrap text-white">ROSE GARDEN COLLECTIVE</p>
          </div>
        </div>
      </div>
    </div>
  );
}