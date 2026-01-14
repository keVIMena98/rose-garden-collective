import React from 'react';
import { motion } from 'motion/react';

interface MenuToggleProps {
  isOpen: boolean;
  color?: string;
  className?: string;
}

export function MenuToggle({ isOpen, color = "currentColor", className }: MenuToggleProps) {
  const transition = { duration: 1.0, ease: [0.4, 0, 0.2, 1] };
  
  // Specific Hamburger Coordinates from Figma import:
  // Middle: M13.4845 24 H34.5155 (Width ~21)
  // Top:    M16.5482 19 H31.5482 (Width ~15, centered relative to middle)
  // Bottom: M16.5482 29 H31.5482 (Width ~15, centered relative to middle)

  return (
    <div className={className}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full h-full">
        {/* Top Line -> Becomes one diagonal of X */}
        <motion.path
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          variants={{
            closed: { d: "M 16.5482 19 L 31.5482 19" },
            open: { d: "M 17.99 18.5 L 30.01 29.5" }
          }}
          transition={transition}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Middle Line -> Fades out */}
        <motion.path
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          variants={{
            closed: { d: "M 13.4845 24 L 34.5155 24", opacity: 1 },
            open: { d: "M 24 24 L 24 24", opacity: 0 }
          }}
          transition={transition}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Bottom Line -> Becomes other diagonal of X */}
        <motion.path
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          variants={{
            closed: { d: "M 16.5482 29 L 31.5482 29" },
            open: { d: "M 17.99 29.5 L 29.99 18.5" }
          }}
          transition={transition}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
