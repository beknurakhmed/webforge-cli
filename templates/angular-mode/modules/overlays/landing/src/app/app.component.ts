import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-hero />
    <app-features />
    <app-cta />
    <app-footer />
  `,
  styles: [`
    :host {
      display: block;
      font-family: system-ui, sans-serif;
      color: #374151;
    }
  `]
})
export class AppComponent {
  title = '{{projectName}}';
}
