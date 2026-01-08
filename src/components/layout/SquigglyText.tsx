import React from 'react';
import { motion } from 'motion/react';

interface SquigglyTextProps {
  children: React.ReactNode;
  className?: string;
}

export function SquigglyText({ children, className = "" }: SquigglyTextProps) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {children}
      <svg
        className="absolute left-0 -bottom-1 w-full h-[6px] overflow-visible text-primary pointer-events-none"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 5 Q 25 0 50 5 T 100 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            rest: { pathLength: 0, opacity: 0 },
            hover: { pathLength: 1, opacity: 1 }
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </svg>
    </motion.span>
  );
}
