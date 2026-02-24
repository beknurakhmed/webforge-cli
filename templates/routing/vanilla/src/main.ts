import './style.css';
import { addRoute, initRouter } from './router';

addRoute('/', () => `
  <div class="app">
    <h1>Home</h1>
    <p>Welcome to {{projectName}}</p>
  </div>
`);

addRoute('/about', () => `
  <div class="app">
    <h1>About</h1>
    <p>About {{projectName}}</p>
  </div>
`);

const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = `
  <nav style="display: flex; gap: 1rem; padding: 1rem; border-bottom: 1px solid #e5e7eb">
    <a href="#/">Home</a>
    <a href="#/about">About</a>
  </nav>
  <main id="outlet" style="padding: 1rem"></main>
`;

initRouter('#outlet');
