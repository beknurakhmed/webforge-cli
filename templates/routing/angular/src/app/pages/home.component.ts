import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div>
      <h1>Home</h1>
      <p>Welcome to {{projectName}}</p>
    </div>
  `,
})
export class HomeComponent {}
