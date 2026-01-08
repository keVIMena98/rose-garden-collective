import React from 'react';
import { useParams } from 'react-router-dom';

export default function ImpactStory() {
  const { id } = useParams();
  return (
    <div className="pt-24 pb-20 container mx-auto px-6">
      <h1 className="text-4xl font-serif text-primary mb-6">Story: {id}</h1>
      <p className="text-muted-foreground">Coming soon...</p>
    </div>
  );
}
