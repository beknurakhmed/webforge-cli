'use client';

import { languages, type Lang } from './index';

interface Props {
  current: Lang;
  onChange: (lang: Lang) => void;
}

export function LangSwitcher({ current, onChange }: Props) {
  return (
    <div style={{ display: 'inline-flex', gap: '0.25rem' }}>
      {languages.map((l) => (
        <button
          key={l}
          onClick={() => onChange(l)}
          style={{
            padding: '0.25rem 0.5rem',
            fontSize: '0.75rem',
            border: '1px solid',
            borderColor: l === current ? '#4f46e5' : '#d1d5db',
            borderRadius: '0.25rem',
            background: l === current ? '#4f46e5' : 'transparent',
            color: l === current ? '#fff' : 'inherit',
            cursor: 'pointer',
            textTransform: 'uppercase',
          }}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
