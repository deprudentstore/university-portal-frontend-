'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import api from '@/lib/api';

export default function Announcements() {
  const [items, setItems] = useState([]);
  useEffect(() => { api.get('/announcements').then((res) => setItems(res.data)).catch(() => {}); }, []);

  return (
    <>
      <Navbar />
      <main className="p-8 space-y-4">
        <h1 className="text-2xl font-bold text-primary mb-6">Announcements</h1>
        {items.map((a) => (
          <div key={a.id} className="bg-white rounded shadow p-5">
            <h2 className="font-bold text-primary">{a.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{a.body}</p>
          </div>
        ))}
      </main>
    </>
  );
}
