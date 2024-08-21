const directionType = {
  up: "up",
  right: "right",
  down: "down",
  left: "left",
};

const twoDimensionalArr = [
  [">", "-", "-", "-", "A", "-", "@", "-", "+"],
  [" ", " ", " ", " ", " ", " ", " ", " ", "|"],
  ["+", "-", "U", "-", "+", " ", " ", " ", "C"],
  ["|", " ", " ", " ", "|", " ", " ", " ", "|"],
  ["s", " ", " ", " ", "C", "-", "-", "-", "+"],
];

const startingPoint = ">";
const breakingPoint = "s";

let path = "";
let letters = "";

// Setting right as starting direction
let direction = directionType.right;
let startingRow = 0;
let startingCol = 0;

for (let row = 0; row < twoDimensionalArr.length; row++) {
  for (let col = 0; col < twoDimensionalArr[row].length; col++) {
    if (twoDimensionalArr[row][col] === startingPoint) {
      startingRow = row;
      startingCol = col;
      break;
    }
  }
}

let row = startingRow;
let col = startingCol;

while (true) {
  const element = twoDimensionalArr[row][col];

  if (element === breakingPoint) {
    break;
  }

  if (element !== " ") {
    if (element.match(/[A-Z]/)) {
      letters += element;
    }
    path += element;
  }

  if (element === "+") {
    if (direction === directionType.right || direction === directionType.left) {
      if (
        row + 1 < twoDimensionalArr.length &&
        twoDimensionalArr[row + 1][col] !== " "
      ) {
        direction = directionType.down;
        row++;
      } else if (row - 1 >= 0 && twoDimensionalArr[row - 1][col] !== " ") {
        direction = directionType.up;
        row--;
      }
    } else if (
      direction === directionType.down ||
      direction === directionType.up
    ) {
      if (
        col + 1 < twoDimensionalArr[row].length &&
        twoDimensionalArr[row][col + 1] !== " "
      ) {
        direction = directionType.right;
        col++;
      } else if (col - 1 >= 0 && twoDimensionalArr[row][col - 1] !== " ") {
        direction = directionType.left;
        col--;
      }
    }
  } else if (direction === directionType.right) {
    col++;
  } else if (direction === directionType.left) {
    col--;
  } else if (direction === directionType.down) {
    row++;
  } else if (direction === directionType.up) {
    row--;
  }
}

console.log("Path:", path);
console.log("Letters:", letters);
