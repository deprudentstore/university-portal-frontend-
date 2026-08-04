'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <nav className="bg-primary text-white px-6 py-4 flex justify-between items-center">
      <span className="font-bold text-lg">University Portal</span>
      <div className="flex gap-4 text-sm">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/grades">Grades</Link>
        <Link href="/timetable">Timetable</Link>
        <Link href="/announcements">Announcements</Link>
        <Link href="/fees">Fees</Link>
        <button onClick={logout} className="text-accent">Logout</button>
      </div>
    </nav>
  );
}
