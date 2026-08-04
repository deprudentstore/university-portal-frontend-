'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const { data } = await api.post('/login', form);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      router.push('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={submit} className="bg-white p-8 rounded-lg shadow w-full max-w-sm">
        <h1 className="text-2xl font-bold text-primary mb-6">Sign In</h1>
        {error && <p className="text-red-600 mb-4 text-sm">{error}</p>}
        <input type="email" placeholder="Email" required
          className="w-full border rounded px-3 py-2 mb-4"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" required
          className="w-full border rounded px-3 py-2 mb-6"
          onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="w-full bg-primary text-white py-2 rounded font-semibold">Login</button>
      </form>
    </main>
  );
}
