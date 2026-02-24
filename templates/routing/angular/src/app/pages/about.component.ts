import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div>
      <h1>About</h1>
      <p>About {{projectName}}</p>
    </div>
  `,
})
export class AboutComponent {}
