import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
      <app-header></app-header>
      <app-sudoku-container></app-sudoku-container>
       <app-footer></app-footer>
    
    
    
  `
})
export class AppComponent {
  title = 'Sudoku';
}
