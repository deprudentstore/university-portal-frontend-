'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import api from '@/lib/api';

export default function Timetable() {
  const [rows, setRows] = useState([]);
  useEffect(() => { api.get('/timetable').then((res) => setRows(res.data)).catch(() => {}); }, []);

  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold text-primary mb-6">Class Timetable</h1>
        <table className="w-full bg-white rounded shadow text-sm">
          <thead className="bg-primary text-white">
            <tr><th className="p-3">Day</th><th className="p-3">Course</th><th className="p-3">Time</th><th className="p-3">Venue</th></tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b text-center">
                <td className="p-3">{r.day}</td>
                <td className="p-3">{r.course?.code}</td>
                <td className="p-3">{r.start_time} - {r.end_time}</td>
                <td className="p-3">{r.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
