// Carroussel.tsx
"use client";
import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const categories = ["LFB", "LF2", "NBA", "WNBA"];

export default function Carroussel({ selectedCategory, setSelectedCategory }) {
  const currentIndex = categories.indexOf(selectedCategory);

  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? categories.length - 1 : currentIndex - 1;
    setSelectedCategory(categories[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = currentIndex === categories.length - 1 ? 0 : currentIndex + 1;
    setSelectedCategory(categories[nextIndex]);
  };

  return (
    <div className="relative w-full h-40 bg-gray-800 shadow-lg flex items-center justify-center">
      <button
        className="absolute left-4 text-white text-3xl hover:scale-110 transition-transform"
        onClick={handlePrev}
      >
        <AiOutlineLeft />
      </button>

      <div className="flex flex-col items-center text-white text-center">
        <div className="text-3xl font-semibold py-2 px-6 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors">
          {selectedCategory}
        </div>
      </div>

      <button
        className="absolute right-4 text-white text-3xl hover:scale-110 transition-transform"
        onClick={handleNext}
      >
        <AiOutlineRight />
      </button>
    </div>
  );
}
