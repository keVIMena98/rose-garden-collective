import React from "react";
import { storyblokEditable } from "@storyblok/react";
import { motion } from "motion/react";

export const StoryblokIntro = ({ blok }: { blok: any }) => {
  return (
    <section className="container mx-auto px-6 py-16 text-center max-w-3xl" {...storyblokEditable(blok)}>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground"
        >
          {blok.text || "Add your intro text here..."}
        </motion.p>
    </section>
  );
};
