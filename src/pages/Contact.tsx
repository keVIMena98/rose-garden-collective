import React, { useRef } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Mail, Instagram, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { GrainyOverlay } from '../components/layout/GrainyOverlay';
import { toast } from 'sonner';
import { SEO, SEO_CONFIG } from '../components/SEO';
import contactHeroImg from '../assets/IMG_0225.webp';

// Helper for scroll-triggered reveal animations
function RevealSection({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// Define the form schema
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form';

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const bgY = useTransform(scrollY, [0, 1000], [0, 1000]); 
  const titleY = useTransform(scrollY, [0, 1000], [0, 400]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [hasSubmitted, setHasSubmitted] = React.useState(false);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // TODO: Replace with your actual Formspree endpoint or API URL
      // Example: "https://formspree.io/f/xyzkqwer"
      const ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"; 
      
      // For now, we simulate a success if no endpoint is set, 
      // but warn in console users need to configure it.
      if (ENDPOINT.includes("YOUR_FORM_ID")) {
        console.warn("⚠️ Contact Form: Please configure your Formspree endpoint in Contact.tsx");
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
      } else {
         const response = await fetch(ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(data),
        });
        
        if (!response.ok) {
           throw new Error("Failed to send message");
        }
      }

      toast.success("Message Sent", {
        description: "Thank you for reaching out! We'll get back to you soon.",
      });
      setHasSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Contact Error:", error);
      toast.error("Error sending message", {
        description: "Please try again later or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={containerRef} className="w-full bg-background text-foreground font-sans min-h-[100dvh] flex flex-col">
       <SEO {...SEO_CONFIG.contact} />
       {/* 1. Hero Section - Parallax */}
       <div className="relative w-full h-screen min-h-[100dvh] z-0">
         {/* Background Image */}
         <motion.div 
           style={{ y: bgY }}
           className="absolute inset-0 w-full h-full -z-20"
         >
           <img 
             src={contactHeroImg}
             className="w-full h-full object-cover" 
             alt="Contact Hero" 
           />
           <div className="absolute inset-0 bg-black/20" /> 
         </motion.div>
         
         {/* Hero Title */}
         <div className="relative z-10 h-full flex flex-col items-center justify-center pt-20 pointer-events-none px-4">
            <motion.h1 
              style={{ y: titleY }}
              className="font-serif text-[15vw] md:text-[160px] leading-none text-white text-center drop-shadow-lg select-none uppercase w-full"
            >
              CONTACT
            </motion.h1>
         </div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 bg-background">
        <GrainyOverlay />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col gap-24">
           
           {/* Top Heading */}
           <RevealSection className="text-center space-y-4">
              <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] text-primary">
                Need assistance?
                <br />
                <span className="italic font-serif">We’re here to guide</span>
              </h2>
           </RevealSection>

           <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-start">
              
              {/* Left Col: Info */}
              <RevealSection>
                 <div className="space-y-12 md:sticky md:top-32">
                    <div className="space-y-6">
                       <h3 className="font-serif text-4xl leading-tight text-primary">
                          Contact Us
                       </h3>
                       <p className="text-[24px] text-lg opacity-80 max-w-sm font-light leading-relaxed">
                          Let's talk. Whatever you need, we're ready to help.
                       </p>
                    </div>

                    <div className="space-y-6 text-lg">
                       <div className="flex flex-col gap-1">
                          <span className="opacity-60 text-base">Email:</span>
                          <a href="mailto:hello@rosegardencollective.com" className="font-bold hover:text-primary transition-colors">
                             HELLO@ROSEGARDENCOLLECTIVE.COM
                          </a>
                       </div>

                       <div className="flex flex-col gap-1">
                          <span className="opacity-60 text-base">Socials:</span>
                          <div className="flex gap-6 pt-1">
                             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-primary transition-colors flex items-center gap-2">
                                INSTAGRAM
                             </a>
                             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-primary transition-colors flex items-center gap-2">
                                FACEBOOK
                             </a>
                          </div>
                       </div>
                    </div>
                 </div>
              </RevealSection>

              {/* Right Col: Form */}
              <RevealSection className="md:mt-4">
                 <Form {...form}>
                    {hasSubmitted ? (
                      <div className="flex flex-col items-center justify-center p-8 text-center space-y-6 bg-card/50 border border-primary/20 rounded-lg animate-in fade-in duration-500">
                        <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                           <Mail className="size-10" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-serif text-3xl text-primary">Message Sent!</h3>
                          <p className="text-lg opacity-80 max-w-sm">
                            Thank you for reaching out. We will get back to you as soon as possible.
                          </p>
                        </div>
                        <Button 
                          onClick={() => setHasSubmitted(false)}
                          variant="outline"
                          className="mt-4 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
                       <div className="grid gap-10">
                          
                          {/* Name Row */}
                          <div className="grid grid-cols-2 gap-8">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem className="space-y-3">
                                  <FormLabel className="text-sm uppercase tracking-wider opacity-60">First Name</FormLabel>
                                  <FormControl>
                                    <Input 
                                      className="bg-transparent border-primary/30 focus:border-primary h-10 text-lg rounded-none border-t-0 border-x-0 border-b px-0 shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/30" 
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="lastName"
                              render={({ field }) => (
                                <FormItem className="space-y-3">
                                  <FormLabel className="text-sm uppercase tracking-wider opacity-60">Last Name</FormLabel>
                                  <FormControl>
                                    <Input 
                                      className="bg-transparent border-primary/30 focus:border-primary h-10 text-lg rounded-none border-t-0 border-x-0 border-b px-0 shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/30" 
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem className="space-y-3">
                                <FormLabel className="text-sm uppercase tracking-wider opacity-60">Your Email</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="email" 
                                    className="bg-transparent border-primary/30 focus:border-primary h-10 text-lg rounded-none border-t-0 border-x-0 border-b px-0 shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/30" 
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem className="space-y-3">
                                <FormLabel className="text-sm uppercase tracking-wider opacity-60">Your Phone No</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="tel" 
                                    className="bg-transparent border-primary/30 focus:border-primary h-10 text-lg rounded-none border-t-0 border-x-0 border-b px-0 shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/30" 
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem className="space-y-3">
                                <FormLabel className="text-sm uppercase tracking-wider opacity-60">Your Message</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    className="bg-transparent border-primary/30 focus:border-primary min-h-[100px] resize-none text-lg rounded-none border-t-0 border-x-0 border-b px-0 shadow-none focus-visible:ring-0 placeholder:text-muted-foreground/30" 
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                       </div>

                       <div className="pt-4">
                         <Button 
                           type="submit" 
                           disabled={isSubmitting}
                           className="w-full md:w-auto px-12 py-8 rounded-full text-xl shadow-lg hover:bg-card hover:text-card-foreground transition-colors"
                         >
                            {isSubmitting ? "Sending..." : "Send Message"}
                         </Button>
                       </div>
                    </form>
                    )}
                 </Form>
              </RevealSection>

           </div>
        </div>
      </div>
    </div>
  );
}