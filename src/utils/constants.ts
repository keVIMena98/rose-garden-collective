import { Facebook, Instagram, Mail, MapPin } from "lucide-react";

export const NAV_LINKS = [
  { 
    name: "Who We Are", 
    path: "/who-we-are", 
    subLinks: [
      { name: "Our Story", path: "/story" },
      { name: "Our Founder's Story", path: "/founder-story" },
      { name: "Our Care Team", path: "/care-team" },
      { name: "Meet Our Teachers", path: "/teachers" },
      { name: "Careers", path: "/careers" }
    ] 
  },
  { 
    name: "What We Offer", 
    path: "/what-we-offer", 
    subLinks: [
      { name: "Our Programs", path: "/programs" },
      { name: "Our Services", path: "/services" },
      { name: "Wellness Retreats", path: "/retreats" }
    ] 
  },
  { name: "Join The Karma Club", path: "/karma-club" },
  { name: "Our Reach", path: "/impact" },
  { name: "Stories Of Impact", path: "/stories-of-impact" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact Us", path: "/contact" },
  { name: "Donate Now", path: "/donate" }
];

export const SOCIAL_LINKS = [
  { name: "Instagram", icon: Instagram, url: "#" },
  { name: "Facebook", icon: Facebook, url: "#" },
];

export const CONTACT_INFO = {
  email: "hello@rosegarden.com",
  address: "Cayman Islands",
};
