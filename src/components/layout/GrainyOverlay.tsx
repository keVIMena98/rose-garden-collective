import React from 'react';
import bgTexture from "figma:asset/5a1ec8ea6c4524e0727a8833d09e55b05b939353.png";
import { cn } from "../ui/utils";

export function GrainyOverlay({ className }: { className?: string }) {
  return (
      <div 
        className={cn("absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-multiply", className)}
        style={{ 
          backgroundImage: `url(${bgTexture})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px'
        }}
      />
  );
}
