import React from 'react';
import svgPaths from "./imports/svg-ttmyp3obo9";

export default function LogoShort({ spiralRef }: { spiralRef?: React.RefObject<HTMLDivElement> }) {
  return (
    <div className="relative size-full" data-name="logo/Short">
      <div ref={spiralRef} className="absolute aspect-[230.064/253.755] left-[35.81%] overflow-clip right-[33.1%] top-0" data-name="monogram">
        <div className="absolute inset-0" style={{ "--fill-0": "var(--primary)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.5257 48.0077">
            <path d={svgPaths.p12588000} fill="var(--fill-0, #007566)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute aspect-[188.37/213.225] left-0 right-[69.73%] top-[calc(50%-0.5px)] translate-y-[-50%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.3784 47.9702">
          <path d={svgPaths.p671a080} fill="var(--secondary)" id="Vector" />
        </svg>
      </div>
      <div className="absolute aspect-[170.387/213.502] left-[72.57%] right-0 top-1/2 translate-y-[-50%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.4054 48.1237">
          <path d={svgPaths.p3b857dc0} fill="var(--secondary)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}
