import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TauxChangeService {

  private txchange = new BehaviorSubject<number>(1.1);
  txchange$ = this.txchange.asObservable();
  private txFixe: number | null = null;

  constructor() {
    setInterval(() => {
      const rChange = (Math.random() - 0.5) * 0.1;
      const nvlChange = this.txchange.value + rChange;

      if (this.txFixe && Math.abs((nvlChange - this.txFixe) / this.txFixe) > 0.02) {
        this.txFixe = null;
      }

      this.txchange.next(this.txFixe ?? nvlChange);
    }, 3000);
  }
  setTauxFix(taux: number): void {
    this.txFixe = taux;
    this.txchange.next(taux);
  }
}
