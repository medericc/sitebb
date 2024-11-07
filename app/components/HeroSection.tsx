// HeroHeader.tsx
"use client";
import React from 'react';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import Image from 'next/image';

export default function HeroHeader({ carouselOpen, toggleCarousel }) {
  return (
    <div className="relative w-full h-50 bg-gray-800 shadow-lg flex items-center justify-between px-8">
      {/* Left: Image */}
      <div className="w-1/3">
        <Image
          src="/logo.png"
          alt="Hero Image"
          width={400}
          height={300}
          className="object-cover rounded-lg"
        />
      </div>

      {/* Right: Arrow Icon */}
      <div className="flex flex-col items-end space-y-4">
        <button onClick={toggleCarousel} className="text-white text-3xl hover:scale-110 transition-transform">
          {carouselOpen ? <AiOutlineUp /> : <AiOutlineDown />}
        </button>
      </div>
    </div>
  );
}
