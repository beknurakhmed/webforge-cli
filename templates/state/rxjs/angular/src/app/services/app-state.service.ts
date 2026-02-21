import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface AppState {
  count: number;
}

@Injectable({ providedIn: 'root' })
export class AppStateService {
  private state$ = new BehaviorSubject<AppState>({ count: 0 });

  get state() { return this.state$.asObservable(); }
  get currentState() { return this.state$.getValue(); }

  increment() { this.state$.next({ ...this.currentState, count: this.currentState.count + 1 }); }
  decrement() { this.state$.next({ ...this.currentState, count: this.currentState.count - 1 }); }
  reset() { this.state$.next({ count: 0 }); }
}
