import { Component } from '@angular/core';
import {TauxChangeService} from "../taux-change.service";

@Component({
  selector: 'app-conversion-switch',
  templateUrl: './conversion-switch.component.html',
  styleUrls: ['./conversion-switch.component.css']
})
export class ConversionSwitchComponent {

  isEuro = true;
  montant =0;
  montantCible =0;

  constructor(private tauxChangeService: TauxChangeService) {
    this.tauxChangeService.txchange$.subscribe(taux => {
      this.convertirDevise(taux);
    });
  }

  convertirDevise(taux?: number) : void{
    let tauxActuel = 0;
    if(taux){
      tauxActuel=taux;
    }else{
      this.tauxChangeService.txchange$.subscribe(val =>tauxActuel=val);
    }
    if (this.isEuro) {
      this.montantCible = this.montant * tauxActuel;
    } else {
      debugger
      this.montantCible = this.montant / tauxActuel;
    }
  }
  selectionDevice($event: any) : void{
    $event.value==='EUR'? this.isEuro= true : this.isEuro=false;
  }
}
