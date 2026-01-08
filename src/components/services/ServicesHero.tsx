import React from 'react';

export const ServicesHero = () => {
  return (
    <div className="relative w-full flex flex-col items-center pt-32 pb-12 md:pb-24 overflow-hidden">
      {/* Huge Title */}
      <div className="text-center z-10 relative px-4 w-full">
         <h1 className="font-serif text-[15vw] md:text-[12vw] leading-[0.8] text-white select-none pointer-events-none drop-shadow-sm">
           OUR SERVICES
         </h1>
      </div>
      
      {/* Video / Image Container */}
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 -mt-8 md:-mt-16 z-0 relative">
         <div className="aspect-video w-full rounded-[20px] md:rounded-[40px] overflow-hidden shadow-2xl bg-muted relative">
             <img 
               src="https://images.unsplash.com/photo-1593164842264-854604db0060?q=80&w=2000&auto=format&fit=crop" 
               className="w-full h-full object-cover" 
               alt="Services Hero"
             />
             {/* Overlay Gradient */}
             <div className="absolute inset-0 bg-black/10" />
             
             {/* Play Button Indicator (Decorative) */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                   <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
             </div>
         </div>
      </div>
    </div>
  );
};
