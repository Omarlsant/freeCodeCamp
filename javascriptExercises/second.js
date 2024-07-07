const character = "!";
const count = 10;
let inverted = true;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

let topRows = [];
let bottomRows = [];

for (let i = 1; i <= count; i++) {
  topRows.push(padRow(i, count));
}

for (let i = count - 1; i >= 1; i--) {
  bottomRows.push(padRow(i, count));
}

if (inverted) {
  let temp = topRows;
  topRows = bottomRows;
  bottomRows = temp;
}

let rows = topRows.concat(bottomRows);

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);