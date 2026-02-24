import Link from 'next/link';

export default function Nav() {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
