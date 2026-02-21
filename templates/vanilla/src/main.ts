import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = `
  <div class="app">
    <h1>{{projectName}}</h1>
    <p>Welcome to your new project!</p>
  </div>
`;
