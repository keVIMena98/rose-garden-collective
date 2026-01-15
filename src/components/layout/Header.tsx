import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTitle, SheetDescription } from '../ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Button } from '../ui/button';
import { NAV_LINKS } from '../../utils/constants';
import { cn } from '../ui/utils';
import LogoShort from '../figma/LogoShort';
import { MenuToggle } from './MenuToggle';
import { SquigglyText } from './SquigglyText';

export function Header() {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleLogoSpin = () => {
      if (logoRef.current) {
        // Spin clockwise (positive deg) when scrolling down (positive scrollY)
        // Adjust speed factor (0.4) as needed
        logoRef.current.style.transform = `rotate(${window.scrollY * 0.4}deg)`;
      }
    };
    
    window.addEventListener('scroll', handleLogoSpin, { passive: true });
    handleLogoSpin(); // Initial position
    
    return () => window.removeEventListener('scroll', handleLogoSpin);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const headerClass = cn(
    "fixed top-0 left-0 right-0 z-[100] bg-transparent pointer-events-none",
    'py-0'
  );

  // Determine Color State
  const contentColor = "var(--foreground)";

  return (
    <header className={cn(headerClass, "z-[999]")}>
      <div className={cn(
        "flex items-center justify-between",
        "w-full h-[64px] px-[30px]", // Mobile styles
        "md:h-[90px] md:px-[100px]" // Desktop styles
      )}>
        
        {/* Left: Hamburger Menu (Manual Trigger) */}
        {/* Always interactive (pointer-events-auto) to allow toggling */}
        {/* Visible on top of everything including the menu */}
        <div className={cn(
          "flex items-center justify-start w-[91px] md:w-[127px] z-[1000] pointer-events-auto text-white",
          !isOpen && "mix-blend-difference"
        )}>
            <button 
              type="button"
              className={cn(
                "relative size-[48px] hover:opacity-70 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-transparent border-none p-0 cursor-pointer pointer-events-auto"
              )}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              }}
            >
              <MenuToggle isOpen={isOpen} color="#FFFFFF" />
            </button>
        </div>
            
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetContent 
                side="left" 
                className="w-full sm:max-w-none md:w-[25vw] bg-transparent border-r-0 p-0 overflow-y-auto [&>button]:hidden z-[998] duration-1000 data-[state=open]:duration-1000 data-[state=closed]:duration-1000 ease-in-out shadow-none"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Main navigation menu.
                </SheetDescription>

                {/* Removed the internal close button as the header button now stays visible */}

                {/* Content Container: Added bg-background (Light Blue) to cover parent's green */}
                <div className="p-6 flex flex-col h-full pt-[100px] bg-background/50 backdrop-blur-md text-foreground">
                  <nav className="flex-1 flex flex-col gap-2">
                    <Link 
                      to="/" 
                      className="block text-2xl font-sans text-foreground py-3 hover:text-foreground/80 transition-colors font-normal"
                    >
                      {/* <SquigglyText>Home</SquigglyText> */}
                    </Link>
                    {NAV_LINKS.filter(link => link.name !== 'Donate Now').map((link) => (
                        link.subLinks ? (
                          <Accordion key={link.name} type="single" collapsible className="w-full border-none shadow-none">
                            <AccordionItem value={link.name} className="border-none">
                              <AccordionTrigger className="text-2xl font-sans text-foreground hover:no-underline py-2 font-normal hover:text-foreground/80 transition-colors">
                                <SquigglyText>{link.name}</SquigglyText>
                              </AccordionTrigger>
                              <AccordionContent className="flex flex-col gap-3 pl-4 pt-2 pb-4">
                                {link.subLinks.map(sub => (
                                  <Link 
                                    key={sub.path} 
                                    to={sub.path} 
                                    className="text-lg text-foreground/80 hover:text-foreground transition-colors font-light"
                                  >
                                    <SquigglyText>{sub.name}</SquigglyText>
                                  </Link>
                                ))}
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        ) : (
                          <Link 
                            key={link.name}
                            to={link.path} 
                            className="block text-2xl font-sans text-foreground py-3 hover:text-foreground/80 transition-colors font-normal"
                          >
                            <SquigglyText>{link.name}</SquigglyText>
                          </Link>
                        )
                    ))}
                  </nav>

                  <div className="mt-12 flex flex-col gap-4 mb-8">
                    {/* Donate Button: Teal (Primary) on Light Blue (Background) */}
                    <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-card hover:text-card-foreground text-lg py-6 font-medium font-sans" asChild>
                      <Link to="/donate">Make a Donation</Link>
                    </Button>
                    
                    <div className="mt-8 pt-8 border-t border-foreground/20 text-foreground/70 text-sm font-light">
                      <p className="text-[12px] mb-2 uppercase tracking-widest text-xs font-sans">Stay Connected</p>
                      <p className="text-[24px] font-sans text-foreground/90">hello@rosegardencollective.com</p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

        {/* Center/Right: Logo */}
        {/* Disable interaction when menu is open */}
        <div className={cn(
            "absolute transition-all duration-300",
            "right-[30px] top-1/2 -translate-y-1/2", // Mobile: Right Aligned
            "md:left-1/2 md:-translate-x-1/2 md:right-auto", // Desktop: Centered
            "w-[105px] h-[36px]", // Mobile Dimensions
            "md:w-[140px] md:h-[53px]", // Desktop Dimensions
            isOpen ? "pointer-events-none" : "pointer-events-auto"
        )}>
            <Link 
              to="/" 
              className="block w-full h-full transition-colors duration-300" 
              aria-label="Home"
              style={{ color: contentColor }}
            >
                <div className="w-full h-full flex items-center justify-center">
                    <LogoShort spiralRef={logoRef} />
                </div>
            </Link>
        </div>

        {/* Right: Donate Button (Desktop Only) */}
        {/* Disable interaction when menu is open */}
        <div className={cn(
            "hidden md:flex w-[127px] z-[1] justify-end",
            isOpen ? "pointer-events-none" : "pointer-events-auto"
        )}>
            <Link to="/donate" className={cn(
                "h-[48px] relative rounded-[60px] shrink-0 w-[127px] flex items-center justify-center transition-colors",
                "bg-primary text-primary-foreground hover:bg-card hover:text-card-foreground"
            )}>
                <span className="font-sans font-medium text-[18px]">Donate</span>
            </Link>
        </div>

      </div>
    </header>
  );
}