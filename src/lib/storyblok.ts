import { storyblokInit } from "@storyblok/react";
import { StoryblokPage } from "../components/storyblok/StoryblokPage";
import { StoryblokHero } from "../components/storyblok/StoryblokHero";
import { StoryblokIntro } from "../components/storyblok/StoryblokIntro";
import { StoryblokServiceGrid } from "../components/storyblok/StoryblokServiceGrid";

const STORYBLOK_TOKEN = "oBqs2QkmoahEwZMbTZER7Att"; // Replace with your actual token

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

export async function fetchStory(slug: string) {
  if (!isStoryblokConfigured()) return null;

  try {
    const url = `${API_URL}/${slug}?version=draft&token=${STORYBLOK_TOKEN}&cv=${Date.now()}`;
    const res = await fetch(url);
    
    if (!res.ok) {
      if (res.status === 404) {
        // Story not found. Return null to trigger fallback UI.
        return null;
      }
      if (res.status === 401) {
        console.error("Storyblok: Unauthorized (401). Check your Access Token.");
        return null;
      }
      throw new Error(`Storyblok API Error: ${res.status} ${res.statusText}`);
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
    const res = await fetch(url);
    
    if (!res.ok) {
       if (res.status === 404) return [];
       if (res.status === 401) {
         console.error("Storyblok: Unauthorized (401). Check your Access Token.");
         return [];
       }
       throw new Error(`Storyblok API Error: ${res.status} ${res.statusText}`);
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
