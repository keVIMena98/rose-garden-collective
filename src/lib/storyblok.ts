import { storyblokInit } from "@storyblok/react";
import { StoryblokPage } from "../components/storyblok/StoryblokPage";
import { StoryblokHero } from "../components/storyblok/StoryblokHero";
import { StoryblokIntro } from "../components/storyblok/StoryblokIntro";
import { StoryblokServiceGrid } from "../components/storyblok/StoryblokServiceGrid";

const STORYBLOK_TOKEN = "oBqs2QkmoahEwZMbTZER7Att"; 

// Initialize Storyblok (Components + Bridge)
storyblokInit({
  accessToken: STORYBLOK_TOKEN, 
  use: [], 
  components: {
    page: StoryblokPage,
    hero: StoryblokHero,
    intro: StoryblokIntro,
    service_grid: StoryblokServiceGrid
  },
  enableFallbackComponent: true,
});

export const isStoryblokConfigured = () => {
  return STORYBLOK_TOKEN && STORYBLOK_TOKEN.length > 0 && STORYBLOK_TOKEN !== "YOUR_STORYBLOK_TOKEN_HERE";
};

// --- Custom Fetchers (Bypassing storyblok-js-client) ---

const API_URL = "https://api.storyblok.com/v2/cdn/stories";
const API_URL_US = "https://api-us.storyblok.com/v2/cdn/stories";

async function fetchWithRegionRetry(url: string) {
  let res = await fetch(url);
  
  // If Unauthorized (401), try US Region
  if (res.status === 401 && url.startsWith(API_URL)) {
    console.info("Storyblok: Unauthorized on EU endpoint, trying US endpoint...");
    const usUrl = url.replace(API_URL, API_URL_US);
    res = await fetch(usUrl);
  }
  
  return res;
}

export async function fetchStory(slug: string) {
  if (!isStoryblokConfigured()) return null;

  try {
    const url = `${API_URL}/${slug}?version=draft&token=${STORYBLOK_TOKEN}&cv=${Date.now()}`;
    const res = await fetchWithRegionRetry(url);
    
    if (!res.ok) {
      if (res.status === 404) return null;
      console.error(`Storyblok API Error: ${res.status} ${res.statusText}`);
      return null;
    }
    
    const data = await res.json();
    return data.story;
  } catch (e) {
    console.error("Failed to fetch story:", e);
    return null;
  }
}

export async function fetchStories(params: Record<string, string> = {}) {
  if (!isStoryblokConfigured()) return [];

  try {
    const query = new URLSearchParams({
      version: "draft",
      token: STORYBLOK_TOKEN,
      cv: String(Date.now()),
      ...params
    });
    
    const url = `${API_URL}?${query.toString()}`;
    const res = await fetchWithRegionRetry(url);
    
    if (!res.ok) {
       if (res.status === 404) return [];
       console.error(`Storyblok API Error: ${res.status} ${res.statusText}`);
       return [];
    }

    const data = await res.json();
    return data.stories || [];
  } catch (e) {
    console.error("Failed to fetch stories:", e);
    return [];
  }
}

// Content Type definition for reference
export interface ServiceStory {
  title: string;
  short_description: string;
  about: any; // Rich Text JSON
  price: string;
  duration: string;
  image: { filename: string; alt?: string };
  hero_image: { filename: string; alt?: string };
  booking_url: { url: string };
  features: any; // Rich Text or Blocks
  color_theme?: string; // Optional: 'green', 'orange', etc.
}

// --- Events Integration ---

export interface StoryblokEvent {
  id: string | number;
  title: string;
  category: 'recurring' | 'community' | 'past';
  location: string;
  image: string;
  link: string;
  
  // Specific fields
  frequency?: string;
  schedule?: string;
  price?: string;
  date?: string;
  month?: string;
  time?: string;
}

const FALLBACK_EVENTS: StoryblokEvent[] = [
  // Recurring
  {
    id: 'r1',
    title: "Yoga for Breast Cancer Foundation",
    category: 'recurring',
    frequency: "Weekly",
    schedule: "Every Tuesday @ 4:00 PM",
    location: "Rose Garden Studio",
    price: "Free",
    image: "https://images.unsplash.com/photo-1758274536471-912e9d20d4fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW50bGUlMjB5b2dhJTIwY2xhc3MlMjB3b21lbnxlbnwxfHx8fDE3NjgyODAyNzJ8MA&ixlib=rb-4.1.0&q=80&w=400&auto=format&fit=crop",
    link: "https://rosegardencollective.setmore.com"
  },
  {
    id: 'r2',
    title: "Yoga at Botanic Park",
    category: 'recurring',
    frequency: "Monthly",
    schedule: "2nd Sunday of Every Month",
    location: "Queen Elizabeth II Botanic Park",
    price: "Free",
    image: "https://images.unsplash.com/photo-1758274526045-2bd03dcc64d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIweW9nYSUyMHBhcmslMjBuYXR1cmV8ZW58MXx8fHwxNzY4MjgwMjcyfDA&ixlib=rb-4.1.0&q=80&w=400&auto=format&fit=crop",
    link: "https://rosegardencollective.setmore.com"
  },
  // Upcoming (Community)
  { 
    id: 'c1',
    title: "Full Moon Healing Circle", 
    category: 'community',
    date: "18", 
    month: "DEC", 
    location: "Seven Mile Beach (Public Access 4)", 
    time: "7:00 PM - 9:00 PM",
    image: "https://images.unsplash.com/photo-1750425110887-f1e627b35550?q=80&w=400&auto=format&fit=crop",
    link: "https://rosegardencollective.setmore.com"
  },
  { 
    id: 'c2',
    title: "Community Beach Clean Up", 
    category: 'community',
    date: "22", 
    month: "DEC", 
    location: "Barkers National Park", 
    time: "8:00 AM - 11:00 AM",
    image: "https://images.unsplash.com/photo-1569990823958-a33f4125197a?q=80&w=400&auto=format&fit=crop",
    link: "https://rosegardencollective.setmore.com"
  },
  { 
    id: 'c3',
    title: "Intro to Reiki Workshop", 
    category: 'community',
    date: "05", 
    month: "JAN", 
    location: "Rose Garden Studio", 
    time: "2:00 PM - 5:00 PM",
    image: "https://images.unsplash.com/photo-1745096268642-8659b927d100?q=80&w=400&auto=format&fit=crop",
    link: "https://rosegardencollective.setmore.com"
  },
  // Past
  {
    id: 'p1',
    title: "Somatic Movement Series",
    category: 'past',
    date: "15",
    month: "NOV",
    location: "Rose Garden Studio",
    time: "Completed",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=400&auto=format&fit=crop",
    link: ""
  },
  {
    id: 'p2',
    title: "Youth Mindfulness Camp",
    category: 'past',
    date: "10",
    month: "OCT",
    location: "Botanic Park",
    time: "Completed",
    image: "https://images.unsplash.com/photo-1602192509153-0b77e3822648?q=80&w=400&auto=format&fit=crop",
    link: ""
  }
];

export async function getEvents(): Promise<StoryblokEvent[]> {
  // Try lowercase 'event' first
  let stories = await fetchStories({ content_type: 'event', per_page: '100' });
  
  // If empty, try Capitalized 'Event' (in case of user naming error)
  if (!stories || stories.length === 0) {
     stories = await fetchStories({ content_type: 'Event', per_page: '100' });
  }

  if (!stories || stories.length === 0) {
    // Return fallback data if no stories found
    return FALLBACK_EVENTS;
  }

  return stories.map((story: any) => {
    const content = story.content;
    return {
      id: story.uuid,
      title: content.title,
      // Handle case-sensitivity for category and default to community
      category: (content.category || 'community').toLowerCase(),
      location: content.location,
      image: content.image?.filename || '',
      link: content.link?.url || content.link || '',
      frequency: content.frequency,
      schedule: content.schedule,
      price: content.price,
      date: content.date,
      month: content.month,
      time: content.time
    };
  });
}