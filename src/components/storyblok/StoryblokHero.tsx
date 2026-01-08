import React from "react";
import { storyblokEditable } from "@storyblok/react";
import { PageHero } from "../layout/PageHero";

export const StoryblokHero = ({ blok }: { blok: any }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <PageHero 
        title={blok.title || "Default Title"} 
        subtitle={blok.subtitle || "Subtitle"} 
        imageSrc={blok.image?.filename || blok.image_url || "https://images.unsplash.com/photo-1600334129128-685c5582fd35"}
      />
    </div>
  );
};
