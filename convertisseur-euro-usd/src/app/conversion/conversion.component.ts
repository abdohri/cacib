import {Component} from '@angular/core';
import {TauxChangeService} from "../taux-change.service";

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent {
  montantEnEuro = 0;
  montantEnDolar = 0;

  constructor(private tauxChangeService: TauxChangeService) {
  }

  ngOnInit(): void {
    this.tauxChangeService.txchange$.subscribe(taux => {
      this.convertirToDolar(taux)
    })
  }

  convertirToDolar(taux?: number): void {
    let tauxActl = 0;
    if (taux) {
      tauxActl = taux;
    } else {
      this.tauxChangeService.txchange$.subscribe(val => tauxActl = val);
    }
    this.montantEnDolar = this.montantEnEuro * tauxActl;
  }
}
