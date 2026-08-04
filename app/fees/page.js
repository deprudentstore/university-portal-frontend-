'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import api from '@/lib/api';

export default function Fees() {
  const [fees, setFees] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const sid = user?.student?.id;
    if (sid) api.get(`/students/${sid}/fees`).then((res) => setFees(res.data)).catch(() => {});
  }, []);

  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold text-primary mb-6">Fees</h1>
        <table className="w-full bg-white rounded shadow text-sm">
          <thead className="bg-primary text-white">
            <tr><th className="p-3">Session</th><th className="p-3">Amount</th><th className="p-3">Status</th></tr>
          </thead>
          <tbody>
            {fees.map((f) => (
              <tr key={f.id} className="border-b text-center">
                <td className="p-3">{f.session}</td>
                <td className="p-3">₦{f.amount}</td>
                <td className={`p-3 font-semibold ${f.status === 'paid' ? 'text-green-600' : 'text-red-600'}`}>{f.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
