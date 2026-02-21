import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="app">
      <h1>TEST</h1>
      <p>Welcome to your new project!</p>
    </div>
  `,
  styles: [`
    .app {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
    h1 {
      font-size: 3.2em;
      line-height: 1.1;
    }
  `]
})
export class AppComponent {
  title = 'TEST';
}
