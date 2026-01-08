import { fetchStories, isStoryblokConfigured } from "./storyblok";
import { renderRichText } from "@storyblok/react";

export interface Service {
  id: number | string;
  title: string;
  slug: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  color: string;
  heroImage?: string; 
  fullDescription?: string; // HTML string or plain text
  features?: string[];
  bookingUrl?: string;
}

export const MOCK_SERVICES: Service[] = [
  {
    id: 1,
    title: "Private Yoga Session",
    slug: "private-yoga-session",
    description: "A personalized practice tailored to your body's needs and goals. Includes breathwork and guided relaxation.",
    fullDescription: "<p>Dive deep into your personal practice with a one-on-one yoga session designed specifically for your body and mind. Whether you are a beginner looking to build a strong foundation or an experienced practitioner seeking to refine your alignment, this session offers a safe and supportive space to explore. We will incorporate breathwork (pranayama) and guided relaxation to ensure you leave feeling balanced and rejuvenated.</p>",
    price: "$85",
    duration: "60 mins",
    image: "https://images.unsplash.com/photo-1750425110887-f1e627b35550?q=80&w=600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop",
    color: "bg-primary",
    features: ["Personalized Sequence", "Hands-on Adjustments", "Breathwork & Meditation", "Post-session feedback"],
    bookingUrl: "https://setmore.com"
  },
  {
    id: 2,
    title: "Reiki Energy Healing",
    slug: "reiki-energy-healing",
    description: "Gentle energy work to clear blockages, reduce stress, and promote deep emotional and physical healing.",
    fullDescription: "<p>Reiki is a Japanese technique for stress reduction and relaxation that also promotes healing. It is administered by 'laying on hands' and is based on the idea that an unseen 'life force energy' flows through us. If one's 'life force energy' is low, then we are more likely to get sick or feel stress, and if it is high, we are more capable of being happy and healthy. This session will help clear energy blockages and restore balance to your system.</p>",
    price: "$95",
    duration: "60 mins",
    image: "https://images.unsplash.com/photo-1745096268642-8659b927d100?q=80&w=600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1515023115689-589c3384159b?q=80&w=1200&auto=format&fit=crop",
    color: "bg-secondary",
    features: ["Chakra Balancing", "Stress Reduction", "Emotional Release", "Deep Relaxation"],
    bookingUrl: "https://setmore.com"
  },
  {
    id: 3,
    title: "Guided Meditation",
    slug: "guided-meditation",
    description: "Learn to quiet the mind and find inner stillness with techniques you can take into your daily life.",
    fullDescription: "<p>In this guided meditation session, you will be gently led into a state of deep relaxation and mindfulness. We will explore various techniques such as body scanning, visualization, and breath awareness to help you cultivate a sense of inner peace. This session is perfect for anyone looking to reduce anxiety, improve focus, or simply take a break from the busyness of daily life.</p>",
    price: "$60",
    duration: "45 mins",
    image: "https://images.unsplash.com/photo-1760542758210-7f1be42027dc?q=80&w=600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=1200&auto=format&fit=crop",
    color: "bg-[var(--accent)]",
    features: ["Mindfulness Techniques", "Breath Awareness", "Visualization", "Take-home practices"],
    bookingUrl: "https://setmore.com"
  },
  {
    id: 4,
    title: "Sound Bath",
    slug: "sound-bath",
    description: "Immerse yourself in the healing vibrations of crystal bowls. A deeply restorative experience.",
    fullDescription: "<p>Experience the profound healing power of sound. In a Sound Bath, you will lie comfortably while waves of sound from crystal singing bowls, gongs, and chimes wash over you. These vibrations help to shift your brainwaves into a meditative state, promoting deep relaxation and cellular healing. It is a passive yet powerful way to restore harmony to your body and mind.</p>",
    price: "$75",
    duration: "60 mins",
    image: "https://images.unsplash.com/photo-1569990823958-a33f4125197a?q=80&w=600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=1200&auto=format&fit=crop",
    color: "bg-[var(--chart-4)]",
    features: ["Crystal Bowls", "Vibrational Healing", "Deep Rest", "Energy Clearing"],
    bookingUrl: "https://setmore.com"
  },
  {
    id: 5,
    title: "Holistic Counseling",
    slug: "holistic-counseling",
    description: "Compassionate listening and guidance to help you navigate life's challenges with grace.",
    fullDescription: "<p>Holistic counseling looks at the whole person—mind, body, and spirit. In these sessions, we provide a safe and non-judgmental space for you to explore your thoughts and feelings. Drawing from various therapeutic modalities as well as spiritual wisdom, we will work together to uncover patterns, heal past wounds, and empower you to live a more authentic and fulfilling life.</p>",
    price: "$110",
    duration: "75 mins",
    image: "https://images.unsplash.com/photo-1620153660954-7c7d425c8f65?q=80&w=600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1200&auto=format&fit=crop",
    color: "bg-[var(--card)]",
    features: ["Compassionate Listening", "Spiritual Guidance", "Emotional Support", "Life Path Clarity"],
    bookingUrl: "https://setmore.com"
  },
  {
    id: 6,
    title: "Group Private",
    slug: "group-private",
    description: "Gather your friends or family for a private group session. Perfect for celebrations or bonding.",
    fullDescription: "<p>Create a memorable experience for your group with a private session tailored to your needs. Whether it's a birthday celebration, a bachelorette party, or a corporate team-building event, we can design a class that brings everyone together. Choose from yoga, meditation, sound healing, or a combination of modalities to suit your group's vibe.</p>",
    price: "$150",
    duration: "60 mins",
    image: "https://images.unsplash.com/photo-1601408648796-349272138e57?q=80&w=600&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop",
    color: "bg-primary",
    features: ["Custom Theme", "Group Bonding", "Flexible Location", "All Levels Welcome"],
    bookingUrl: "https://setmore.com"
  }
];

export async function fetchServices(): Promise<Service[]> {
  if (!isStoryblokConfigured()) {
    return MOCK_SERVICES;
  }

  const stories = await fetchStories({
    starts_with: "services/",
    is_startpage: "false",
  });

  if (!stories || stories.length === 0) {
    return MOCK_SERVICES;
  }

  return stories.map((story: any) => mapStoryToService(story));
}

export async function fetchServiceBySlug(slug: string): Promise<Service | undefined> {
  if (!isStoryblokConfigured()) {
    return MOCK_SERVICES.find(s => s.slug === slug);
  }

  const stories = await fetchStories({
    by_slugs: `services/${slug}`,
  });

  const story = stories?.[0];
  if (story) {
    return mapStoryToService(story);
  }

  return MOCK_SERVICES.find(s => s.slug === slug);
}

function mapStoryToService(story: any): Service {
  const content = story.content || {};
  
  // Safely handle Rich Text rendering
  let fullDesc = "";
  try {
    if (content.about) {
      fullDesc = renderRichText(content.about);
    }
  } catch (e) {
    console.warn("Failed to render rich text for service:", story.slug, e);
  }

  return {
    id: story.uuid,
    slug: story.slug,
    title: content.title || story.name,
    description: content.short_description || "",
    fullDescription: fullDesc, 
    price: content.price || "",
    duration: content.duration || "",
    image: content.image?.filename || "",
    heroImage: content.hero_image?.filename || content.image?.filename,
    color: "bg-primary", 
    features: parseFeatures(content.features),
    bookingUrl: content.booking_url?.url || "https://setmore.com",
  };
}

function parseFeatures(featuresField: any): string[] {
  if (typeof featuresField === 'string') return featuresField.split(',').map(s => s.trim());
  return [];
}
