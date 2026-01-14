import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const DEFAULT_TITLE = 'Rose Garden Collective | Trauma-Informed Yoga & Wellness in Cayman Islands';
const DEFAULT_DESCRIPTION = 'Rose Garden Collective is a grassroots organization bringing wellness modalities to all people of the Cayman Islands, regardless of the cost. We are an aspiring non-profit that currently specializes in trauma-informed yoga and Reiki, with much more on the horizon. Join our movement through a donations-based class, or sharing with a friend,We\'re excited to see you on the journey to collective well-being!';
const SITE_URL = 'https://rosegardencollective.com';

export function SEO({ 
  title, 
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogImage = '/og-image.jpg',
  noIndex = false
}: SEOProps) {
  
  useEffect(() => {
    // Update document title
    const fullTitle = title 
      ? `${title} | Rose Garden Collective` 
      : DEFAULT_TITLE;
    document.title = fullTitle;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update Open Graph title
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute('content', fullTitle);
    }

    // Update Open Graph description
    const ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (ogDescMeta) {
      ogDescMeta.setAttribute('content', description);
    }

    // Update Open Graph URL
    const ogUrlMeta = document.querySelector('meta[property="og:url"]');
    if (ogUrlMeta && canonical) {
      ogUrlMeta.setAttribute('content', `${SITE_URL}${canonical}`);
    }

    // Update Open Graph image
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta && ogImage) {
      const imageUrl = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;
      ogImageMeta.setAttribute('content', imageUrl);
    }

    // Update Twitter title
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', fullTitle);
    }

    // Update Twitter description
    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc) {
      twitterDesc.setAttribute('content', description);
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = `${SITE_URL}${canonical}`;
    }

    // Handle noindex
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (noIndex) {
      if (robotsMeta) {
        robotsMeta.setAttribute('content', 'noindex, nofollow');
      }
    } else {
      if (robotsMeta) {
        robotsMeta.setAttribute('content', 'index, follow');
      }
    }

    // Cleanup: Reset to defaults when component unmounts
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title, description, canonical, ogImage, noIndex]);

  return null; // This component doesn't render anything
}

// Predefined SEO configs for each page
export const SEO_CONFIG = {
  home: {
    title: undefined, // Uses default
    description: DEFAULT_DESCRIPTION,
    canonical: '/'
  },
  story: {
    title: 'Our Story',
    description: 'Learn about Rose Garden Collective\'s mission to bring accessible, trauma-informed yoga and wellness practices to the Cayman Islands community.',
    canonical: '/story'
  },
  services: {
    title: 'Our Services',
    description: 'Explore our wellness services including yoga flow, breath work, meditation, and self-reflection practices. Donation-based classes accessible to everyone.',
    canonical: '/services'
  },
  programs: {
    title: 'Programs',
    description: 'Transform your life with our wellness programs. Trauma-informed yoga, mindfulness training, and community healing practices in the Cayman Islands.',
    canonical: '/programs'
  },
  karmaClub: {
    title: 'Karma Club',
    description: 'Join our Karma Club membership community. Support accessible wellness in the Cayman Islands and receive exclusive benefits.',
    canonical: '/karma-club'
  },
  faq: {
    title: 'FAQ',
    description: 'Frequently asked questions about Rose Garden Collective\'s yoga classes, wellness practices, and community programs in the Cayman Islands.',
    canonical: '/faq'
  },
  contact: {
    title: 'Contact Us',
    description: 'Get in touch with Rose Garden Collective. We\'d love to hear from you about our yoga and wellness programs in the Cayman Islands.',
    canonical: '/contact'
  },
  privacy: {
    title: 'Privacy Policy',
    description: 'Rose Garden Collective privacy policy. Learn how we protect your personal information.',
    canonical: '/privacy'
  },
  terms: {
    title: 'Terms of Service',
    description: 'Rose Garden Collective terms of service and conditions of use.',
    canonical: '/terms'
  }
};
