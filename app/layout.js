import './globals.css';

export const metadata = {
  title: 'University Portal',
  description: 'Student & Lecturer Portal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
