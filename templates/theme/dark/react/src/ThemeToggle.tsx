import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') !== 'light';
    }
    return true;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      style={{
        padding: '0.25rem 0.5rem',
        fontSize: '0.875rem',
        border: '1px solid var(--border)',
        borderRadius: '0.25rem',
        background: 'var(--bg-secondary)',
        color: 'var(--text)',
        cursor: 'pointer',
      }}
      aria-label="Toggle theme"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
