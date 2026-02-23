import { Component, Input } from '@angular/core';

interface ChartBar {
  label: string;
  value: number;
}

@Component({
  selector: 'app-chart-placeholder',
  standalone: true,
  template: `
    <div class="bg-white rounded-xl p-5 border border-gray-200">
      <h3 class="text-base font-semibold text-gray-900 mb-4">{{ title }}</h3>
      <div class="flex items-end gap-2 h-40 pt-2">
        @for (bar of bars; track $index) {
          <div class="flex-1 flex flex-col items-center h-full justify-end">
            <div
              class="w-full max-w-[40px] bg-indigo-600 rounded-t min-h-[4px] transition-all duration-300"
              [style.height.%]="bar.value"
            ></div>
            <span class="text-[0.7rem] text-gray-500 mt-1">{{ bar.label }}</span>
          </div>
        }
      </div>
    </div>
  `,
  styles: []
})
export class ChartPlaceholderComponent {
  @Input() title = 'Chart';

  @Input() bars: ChartBar[] = [
    { label: 'Mon', value: 65 },
    { label: 'Tue', value: 80 },
    { label: 'Wed', value: 45 },
    { label: 'Thu', value: 90 },
    { label: 'Fri', value: 70 },
    { label: 'Sat', value: 55 },
    { label: 'Sun', value: 40 },
  ];
}
