import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <span>Convertisseur euro / dollar</span>
    </mat-toolbar>
    <div class="container">
     <app-taux-change></app-taux-change>
      <app-conversion></app-conversion>
      <app-conversion-switch></app-conversion-switch>
      <app-taux-fixe></app-taux-fixe>
    </div>
  `
})
export class AppComponent {

}
