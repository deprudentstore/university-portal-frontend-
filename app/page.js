import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-primary text-white text-center px-6">
      <h1 className="text-4xl font-bold mb-4">University Portal</h1>
      <p className="mb-8 max-w-md text-gray-200">
        Access your courses, grades, timetable, fees, and announcements in one place.
      </p>
      <div className="flex gap-4">
        <Link href="/login" className="bg-accent px-6 py-2 rounded font-semibold">Login</Link>
        <Link href="/register" className="border border-accent px-6 py-2 rounded font-semibold">Register</Link>
      </div>
    </main>
  );
}
