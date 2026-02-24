import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { I18nService, languages, type Lang } from './i18n.service';

@Component({
  selector: 'app-lang-switcher',
  standalone: true,
  imports: [NgFor],
  template: `
    <div style="display: inline-flex; gap: 0.25rem">
      <button
        *ngFor="let l of langs"
        (click)="setLang(l)"
        [style.padding]="'0.25rem 0.5rem'"
        [style.fontSize]="'0.75rem'"
        [style.border]="'1px solid'"
        [style.borderColor]="l === i18n.lang() ? '#4f46e5' : '#d1d5db'"
        [style.borderRadius]="'0.25rem'"
        [style.background]="l === i18n.lang() ? '#4f46e5' : 'transparent'"
        [style.color]="l === i18n.lang() ? '#fff' : 'inherit'"
        [style.cursor]="'pointer'"
        [style.textTransform]="'uppercase'"
      >{{ l }}</button>
    </div>
  `,
})
export class LangSwitcherComponent {
  langs = [...languages];
  constructor(public i18n: I18nService) {}
  setLang(l: string) { this.i18n.setLang(l as Lang); }
}
