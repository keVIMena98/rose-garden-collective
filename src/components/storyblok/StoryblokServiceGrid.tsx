import React, { useEffect, useState } from "react";
import { storyblokEditable } from "@storyblok/react";
import { fetchServices, Service } from "../../lib/services";
import { ServiceCard } from "../services/ServiceCard";

export const StoryblokServiceGrid = ({ blok }: { blok: any }) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await fetchServices();
      setServices(data);
      setLoading(false);
    }
    load();
  }, [blok]);

  if (loading) {
     return <div className="py-20 flex justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>;
  }

  return (
    <section className="container mx-auto px-6" {...storyblokEditable(blok)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            index={index === 2 ? 3 : index} 
          />
        ))}
      </div>
    </section>
  );
};
