import { Component, OnInit, HostListener } from '@angular/core';
import { SudokuService } from '../sudoku.service';

@Component({
  selector: 'app-sudoku-board',
  templateUrl: './sudoku-board.component.html',
  styleUrls: ['./sudoku-board.component.scss']
})
export class SudokuBoardComponent implements OnInit {

  sudokuTemplate: any;
  sudokuBoard: any;
  selectedValue: number = null;
  selectedCell: any = null;

  constructor(sudokuService: SudokuService) {
    this.sudokuTemplate = sudokuService._generateBoard();
    this.sudokuBoard = sudokuService._cloneBoard(this.sudokuTemplate);
  }

  ngOnInit() {
  }

  _clearSelectedValue = () => {
    this.selectedValue = null;
  }

  _selectCell = (i, j, x, y) => {
    const value = this.sudokuBoard[i][j][x][y];
    this.selectedCell = this._translateCell(i, j, x, y);
    this.selectedValue = value;
  }

  _translateCell = (i, j, x, y) => {
    const cellData = [i, j, x, y];
    return cellData.every((point) => 0 <= point && point <= 2) ? {i, j, x, y} : null;
  }

  _anyCellGuess = (i, j, x, y) => {
    return this.sudokuBoard[i][j][x][y] !== this.sudokuTemplate[i][j][x][y];
  }

  @HostListener('document:keyup', ['$event'] )
  onKey = ($event: KeyboardEvent) => {
    if (this.selectedCell) {
      const allowedInput = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace'];
      if (allowedInput.includes($event.key)) {
        const { i, j, x, y } = this.selectedCell;
        if ($event.key === 'Backspace') {
          this.sudokuBoard[i][j][x][y] = this.sudokuTemplate[i][j][x][y];
        } else {
          const value = parseInt($event.key, 10);
          this.sudokuBoard[i][j][x][y] = value;
          this.selectedValue = value;
        }
      }
    }
  }

}
