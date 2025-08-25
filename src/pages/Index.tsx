import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import Teams from '@/components/Teams';
import Schedule from '@/components/Schedule';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Programs />
      <Teams />
      <Schedule />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;