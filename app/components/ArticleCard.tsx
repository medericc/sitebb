import Image from 'next/image';
import React from 'react';

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    category: string;
    content: string;
    author: string;
    date: string;
    img: string;
  };
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="relative flex bg-white shadow-lg  overflow-hidden hover:shadow-2xl transition-all">
      {/* Image */}
      <div className="flex-shrink-0 w-[35%]">
        <Image
          src={article.img}
          width={150}
          height={100}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="p-4 w-2/3 relative">
        {/* Catégorie en étiquette au-dessus du titre */}
        <span className="bg-red-800 text-white text-xs font-semibold px-2 py-1 rounded mb-2 inline-block">
          {article.category}
        </span>

        <h2 className="text-xl font-semibold mb-1 text-gray-900">{article.title}</h2>
        <p className="text-sm text-gray-600 mb-3">{article.content.substring(0, 100)}...</p>
        <div className="text-xs text-gray-500">
          <p>
          <span className="font-semibold text-gray-800">{article.author}</span> <span className="text-xxs text-gray-500">le {new Date(article.date).toLocaleDateString()}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
