'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold text-primary mb-2">
          Welcome{user ? `, ${user.name}` : ''}
        </h1>
        <p className="text-gray-600 mb-6">Role: {user?.role}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Courses', 'Grades', 'Timetable', 'Announcements', 'Fees'].map((c) => (
            <div key={c} className="bg-white rounded-lg shadow p-6 text-center font-semibold text-primary">
              {c}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
