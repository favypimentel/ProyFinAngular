import { SudokuBoard } from './sudoku-board';

export class Game {

  sudokuBoard: SudokuBoard;
  modified: boolean;

  constructor() {
    this.modified = false;
  }

}
