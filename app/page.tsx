// app/page.tsx
"use client"
// app/page.tsx
import React, { useState } from 'react';
import HeroSection from './components/HeroSection'; // Section for 3D elements
import Defilement from './components/Defilement';
import Carroussel from './components/Carroussel';


export default function HomePage() {
  const [carouselOpen, setCarouselOpen] = useState(false);

  const toggleCarousel = () => setCarouselOpen(!carouselOpen);

  return (
    <div className="container mx-auto">
    
      
      {/* HeroHeader with toggle for carousel */}
      <HeroSection carouselOpen={carouselOpen} toggleCarousel={toggleCarousel} />

      {/* Conditionally render Carroussel based on carouselOpen */}
      {carouselOpen && <Carroussel />}

      <Defilement />
    </div>
  );
}
