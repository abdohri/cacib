import { Component } from '@angular/core';
import {TauxChangeService} from "../taux-change.service";

@Component({
  selector: 'app-taux-change',
  templateUrl: './taux-change.component.html',
  styleUrls: ['./taux-change.component.css']
})
export class TauxChangeComponent {
  txChange$ = this.tauxChangeService.txchange$;
  constructor(private tauxChangeService: TauxChangeService) {}

  ngOnInit(): void {}
}
