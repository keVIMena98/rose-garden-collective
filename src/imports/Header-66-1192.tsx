import clsx from "clsx";
import imgImage from "figma:asset/6cb201291e4ea983199a3a89a94ca74dbc837c13.png";
type ImageImageProps = {
  additionalClassNames?: string;
};

function ImageImage({ additionalClassNames = "" }: ImageImageProps) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

export default function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center px-0 py-[64px] relative size-full" data-name="Header">
      <div className="relative shrink-0 w-full" data-name="Column">
        <div className="size-full">
          <div className="content-stretch flex flex-col items-start px-[30px] py-0 relative w-full">
            <div className="content-stretch flex flex-col items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
              <div className="content-stretch flex flex-col items-start max-w-[768px] relative shrink-0 w-full" data-name="Component">
                <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-black w-full" data-name="Content">
                  <p className="font-['Groovy_Font:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[36px] w-full">Welcome to Rose Garden Collective</p>
                  <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.5] relative shrink-0 text-[14px] w-full">{`We are a grassroots organization bringing  mindfulness and care back to its essence of healing, community, and accessibility through classes and workshops.Together, we inspire resilience and change, creating a legacy of empowerment for future generations.`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 w-full" data-name="Image container">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Image container">
          <ImageImage additionalClassNames="size-[112px]" />
          <ImageImage additionalClassNames="h-[150px] w-[112px]" />
        </div>
        <ImageImage additionalClassNames="h-[542px] w-[188px]" />
        <ImageImage additionalClassNames="h-[200px] w-[150px]" />
      </div>
    </div>
  );
}