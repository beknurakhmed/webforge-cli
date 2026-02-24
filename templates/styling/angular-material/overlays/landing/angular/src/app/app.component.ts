import { Component } from '@angular/core';
import { HeroComponent } from './components/hero.component';
import { FeaturesComponent } from './components/features.component';
import { CtaComponent } from './components/cta.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, FeaturesComponent, CtaComponent, FooterComponent],
  template: `
    <div class="landing">
      <app-hero />
      <app-features />
      <app-cta />
      <app-footer />
    </div>
  `,
  styles: []
})
export class AppComponent {}
