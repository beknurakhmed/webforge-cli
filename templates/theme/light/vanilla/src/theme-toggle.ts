export function renderThemeToggle(container: HTMLElement): void {
  let dark = localStorage.getItem('theme') === 'dark';

  function applyTheme(): void {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    button.textContent = dark ? '\u2600\uFE0F' : '\uD83C\uDF19';
  }

  const button = document.createElement('button');
  button.setAttribute('aria-label', 'Toggle theme');
  Object.assign(button.style, {
    padding: '0.25rem 0.5rem',
    fontSize: '0.875rem',
    border: '1px solid var(--border)',
    borderRadius: '0.25rem',
    background: 'var(--bg-secondary)',
    color: 'var(--text)',
    cursor: 'pointer',
  });

  button.addEventListener('click', () => {
    dark = !dark;
    applyTheme();
  });

  applyTheme();
  container.appendChild(button);
}
