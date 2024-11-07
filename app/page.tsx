// app/page.tsx
"use client";
import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import Defilement from './components/Defilement'; // Assuming this is the ArticleGrid component
import Carroussel from './components/Carroussel';

export default function HomePage() {
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("LFB");

  const toggleCarousel = () => setCarouselOpen(!carouselOpen);

  return (
    <div className="container mx-auto">
      {/* HeroHeader with toggle for carousel */}
      <HeroSection carouselOpen={carouselOpen} toggleCarousel={toggleCarousel} />

      {/* Conditionally render Carroussel based on carouselOpen */}
      {carouselOpen && <Carroussel selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />}

      {/* Pass selectedCategory to Defilement (ArticleGrid) */}
      <Defilement selectedCategory={selectedCategory} />
    </div>
  );
}
