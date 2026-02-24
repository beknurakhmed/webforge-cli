import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero.component';
import { FeaturesComponent } from './components/features.component';
import { CtaComponent } from './components/cta.component';
import { FooterComponent } from './components/footer.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroComponent, FeaturesComponent, CtaComponent, FooterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
