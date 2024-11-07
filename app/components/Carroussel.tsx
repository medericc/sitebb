"use client";
import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import articles from '@/app/data/articles.json';

export default function RouletteHeader() {
  const categories = ["LFB", "LF2", "NBA", "WNBA"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? categories.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === categories.length - 1 ? 0 : prevIndex + 1));
  };

  // Filter articles based on the selected category
  const filteredArticles = articles.filter((article) => article.category === categories[currentIndex]);

  return (
    <div className="relative w-full h-40 bg-gray-800 shadow-lg flex items-center justify-center">
      {/* Rotating Category Buttons */}
      <button
        className="absolute left-4 text-white text-3xl hover:scale-110 transition-transform"
        onClick={handlePrev}
      >
        <AiOutlineLeft />
      </button>

      <div className="flex flex-col items-center text-white text-center">
       <div className="text-3xl font-semibold py-2 px-6 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors">
          {categories[currentIndex]}
        </div>
      </div>

      <button
        className="absolute right-4 text-white text-3xl hover:scale-110 transition-transform"
        onClick={handleNext}
      >
        <AiOutlineRight />
      </button>

      {/* Display filtered articles for the selected category */}
      <div className="absolute top-full left-0 w-full bg-white py-4 shadow-lg">
        <div className="flex overflow-x-scroll space-x-4 px-4">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div key={article.id} className="min-w-[200px] bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold">{article.title}</h3>
                <p className="text-sm">{article.content.slice(0, 50)}...</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No articles found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}
