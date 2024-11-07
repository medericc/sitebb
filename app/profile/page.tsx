// app/profile.tsx
import React from 'react';

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Mon Profil</h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-2">Nom de l'utilisateur</h2>
        <p className="text-gray-600">Email : user@example.com</p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Catégories suivies :</h3>
          <ul className="list-disc ml-4">
            <li>LFB</li>
            <li>LF2</li>
            <li>Coupe de France</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
