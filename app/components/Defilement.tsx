"use client"
import Link from 'next/link';
import React, { useEffect } from 'react';
import articles from '@/app/data/articles.json';
import ArticleCard from './ArticleCard';

export default function ArticleGrid() {
  useEffect(() => {
    const handleScrollAnimation = () => {
      document.querySelectorAll('.article-card').forEach((card) => {
        const element = card as HTMLElement;
        if (element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().bottom >= 0) {
          element.classList.add('animate-slideUp');
          element.classList.remove('opacity-0');
        } else {
          element.classList.remove('animate-slideUp');
          element.classList.add('opacity-0');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

  return (
    <section className="my-8">
      {/* Banner title */}
      <div className="bg-gradient-to-r from-red-700 to-yellow-700 py-4 mb-8 text-center">
        <h1 className="text-4xl font-bold text-white">Derniers Articles</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link key={article.id} href={`/${article.category}/${article.id}`}>
            <div
              className="article-card opacity-0 transition-opacity duration-700 transform"
            >
              <ArticleCard article={article} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
