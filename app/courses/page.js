'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import api from '@/lib/api';

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get('/courses').then((res) => setCourses(res.data)).catch(() => {});
  }, []);

  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold text-primary mb-6">My Courses</h1>
        <table className="w-full bg-white rounded shadow text-sm">
          <thead className="bg-primary text-white">
            <tr><th className="p-3 text-left">Code</th><th className="p-3 text-left">Title</th><th className="p-3">Unit</th><th className="p-3">Semester</th></tr>
          </thead>
          <tbody>
            {courses.map((c) => (
              <tr key={c.id} className="border-b">
                <td className="p-3">{c.code}</td>
                <td className="p-3">{c.title}</td>
                <td className="p-3 text-center">{c.unit}</td>
                <td className="p-3 text-center capitalize">{c.semester}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
