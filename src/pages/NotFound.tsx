import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import bgTexture from "figma:asset/5a1ec8ea6c4524e0727a8833d09e55b05b939353.png";

export default function NotFound() {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center px-6 text-center font-sans overflow-hidden">
      {/* Global Background Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-multiply"
        style={{ 
          backgroundImage: `url(${bgTexture})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px'
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8 opacity-20 text-primary">
            <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="50" cy="50" r="30" />
              <path d="M50 20 C 50 20 60 10 70 20" />
              <path d="M50 80 C 50 80 40 90 30 80" />
              <circle cx="40" cy="45" r="2" fill="currentColor" />
              <circle cx="60" cy="45" r="2" fill="currentColor" />
              <path d="M40 60 Q 50 50 60 60" />
            </svg>
        </div>
        <h1 className="text-6xl font-serif font-bold text-primary mb-4">Lost in the Garden?</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md">
          This page hasn't bloomed yet. Let's get you back to familiar ground.
        </p>
        <Button className="rounded-full bg-primary text-primary-foreground hover:bg-card hover:text-card-foreground px-8 py-6" asChild>
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
