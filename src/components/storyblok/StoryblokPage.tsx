import React from "react";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

export const StoryblokPage = ({ blok }: { blok: any }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body?.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);
