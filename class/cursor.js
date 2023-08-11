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

  up = () => {
    // console.log(`before: ${this.row}, ${this.col}`);
    this.resetBackgroundColor();
    if (this.row !== 0) {
      this.row--;
    }
    this.setBackgroundColor();
    // console.log(`after up(): ${this.row}, ${this.col}`);
  }

  down = () => {
    // console.log(`before: ${this.row}, ${this.col}`);
    this.resetBackgroundColor();
    if (this.row !== this.numRows - 1) {
      this.row++;
    }
    this.setBackgroundColor();
    // console.log(`after down(): ${this.row}, ${this.col}`);
  }

  left = () => {
    // console.log(`before: ${this.row}, ${this.col}`);
    this.resetBackgroundColor();
    if (this.col !== 0) {
      this.col--;
    }
    this.setBackgroundColor();
    // console.log(`after left(): ${this.row}, ${this.col}`);
  }

  right = () => {
    // console.log(`before: ${this.row}, ${this.col}`);
    this.resetBackgroundColor();
    if (this.col !== this.numCols - 1) {
      this.col++;
    }
    this.setBackgroundColor();
    // console.log(`after right(): ${this.row}, ${this.col}`);
  }
}


module.exports = Cursor;
