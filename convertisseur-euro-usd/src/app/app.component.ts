import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <span>Convertisseur euro / dollar</span>
    </mat-toolbar>
    <div class="container">
     <app-taux-change></app-taux-change>
    </div>
  `
})
export class AppComponent {

}
