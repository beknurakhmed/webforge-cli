import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '{{projectName}}',
  description: 'Generated with webforge-cli',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
