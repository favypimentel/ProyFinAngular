import { Component, OnInit } from '@angular/core';

import { Game } from '../game';

@Component({
  selector: 'app-sudoku-container',
  templateUrl: './sudoku-container.component.html',
  styleUrls: ['./sudoku-container.component.scss']
})
export class SudokuContainerComponent implements OnInit {

  game: Game;
  toggleHints: boolean;

  constructor() {
    this.game = new Game();
    this.game.modified = false;
    this.toggleHints = false;
  }

  ngOnInit() {
  }

  _reset = () => {
    console.log('Not yet implemented');
  }

  _new = () => {
    console.log('Not yet implemented');
  }

  _toggleHints = () => {
    this.toggleHints = !this.toggleHints;
  }

}
