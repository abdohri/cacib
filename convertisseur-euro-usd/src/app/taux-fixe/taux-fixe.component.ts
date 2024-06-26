import { Component } from '@angular/core';
import {TauxChangeService} from "../taux-change.service";

@Component({
  selector: 'app-taux-fixe',
  templateUrl: './taux-fixe.component.html',
  styleUrls: ['./taux-fixe.component.css']
})
export class TauxFixeComponent {
  tauxFix = 1.1;
  constructor(private tauxChangeService: TauxChangeService) {}
  setTauxFix(): void{
    this.tauxChangeService.setTauxFix(this.tauxFix);
  }

}
