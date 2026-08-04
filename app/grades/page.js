'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import api from '@/lib/api';

export default function Grades() {
  const [grades, setGrades] = useState([]);
  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const sid = user?.student?.id;
    setStudentId(sid);
    if (sid) api.get(`/students/${sid}/grades`).then((res) => setGrades(res.data)).catch(() => {});
  }, []);

  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold text-primary mb-6">My Grades</h1>
        <table className="w-full bg-white rounded shadow text-sm">
          <thead className="bg-primary text-white">
            <tr><th className="p-3 text-left">Course</th><th className="p-3">Score</th><th className="p-3">Grade</th></tr>
          </thead>
          <tbody>
            {grades.map((g) => (
              <tr key={g.id} className="border-b">
                <td className="p-3">{g.enrollment?.course?.code}</td>
                <td className="p-3 text-center">{g.score}</td>
                <td className="p-3 text-center font-bold">{g.grade_letter}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
