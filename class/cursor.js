const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  up() {
    // console.log(`before: ${this.row}, ${this.col}`);
    if (this.row !== 0) {
      this.row--;
    }
    // console.log(`after up(): ${this.row}, ${this.col}`);
  }

  down() {
    // console.log(`before: ${this.row}, ${this.col}`);
    if (this.row !== this.numRows - 1) {
      this.row++;
    }
    // console.log(`after down(): ${this.row}, ${this.col}`);
  }

  left() {
    // console.log(`before: ${this.row}, ${this.col}`);
    if (this.col !== 0) {
      this.col--;
    }
    // console.log(`after left(): ${this.row}, ${this.col}`);
  }

  right() {
    // console.log(`before: ${this.row}, ${this.col}`);
    if (this.col !== this.numCols - 1) {
      this.col++;
    }
    // console.log(`after right(): ${this.row}, ${this.col}`);
  }
}


module.exports = Cursor;
