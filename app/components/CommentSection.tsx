// components/CommentSection.tsx
"use client"
import React, { useState } from 'react';

export default function CommentSection({ comments, onAddComment }) {
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = () => {
    onAddComment(commentText);
    setCommentText('');
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Commentaires</h3>
      {comments.map((comment, index) => (
        <div key={index} className="bg-gray-100 p-3 my-2 rounded">
          <p>{comment.text}</p>
        </div>
      ))}
      <textarea
        className="w-full border p-2 rounded mt-4"
        placeholder="Ajouter un commentaire"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button onClick={handleCommentSubmit} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
        Ajouter
      </button>
    </div>
  );
}
