import React from 'react';

export default function PaymentDeclined() {
  return (
    <div className="pt-24 pb-20 container mx-auto px-6 text-center">
      <h1 className="text-4xl font-serif text-destructive mb-6">Payment Declined</h1>
      <p className="text-muted-foreground">Something went wrong. Please try again.</p>
    </div>
  );
}
