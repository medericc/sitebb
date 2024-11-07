// app/LFB/index.tsx
import React from 'react';
import Link from 'next/link';
import ArticleCard from '../components/ArticleCard';
import articles from '@/app/data/articles.json';


export default function LFBPage() {
  const lfbArticles = articles.filter((article) => article.category === 'LFB');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">Ligue Féminine de Basketball (LFB)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lfbArticles.map((article) => (
          <Link key={article.id} href={`/LFB/${article.id}`}>
            <ArticleCard article={article} />
          </Link>
        ))}
      </div>
    </div>
  );
}
