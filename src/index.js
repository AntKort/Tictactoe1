import "./styles.css";

let Turn = 0;

function createTable() {
  const table = document.getElementById("board");
  for (let x = 0; x < 5; x++) {
    let row = table.insertRow();

    for (let y = 0; y < 5; y++) {
      row.insertCell();
    }
  }
  click(table);
}

function populateCell(cell, table) {
  if (Turn % 2 === 0) {
    if (cell.innerHTML === "") {
      cell.innerHTML = "X";
      Turn++;
    } else {
      alert("Pick other cell");
    }
  } else {
    if (cell.innerHTML === "") {
      cell.innerHTML = "O";
      Turn++;
    } else {
      alert("Pick other cell");
    }
  }
}

function click(table) {
  for (var x = 0; x < table.rows.length; x++) {
    for (var y = 0; y < table.rows[x].cells.length; y++) {
      table.rows[x].cells[y].onclick = function () {
        populateCell(this, table);
        if (Turn > 8) {
          checkResult();
        }
      };
    }
  }
}
createTable();

function clearTable() {
  document.getElementById("board").innerHTML = "";
  createTable();
}

function checkResult() {
  let roundWin = false;
  let table = document.getElementById("board");
  for (let i = 0; i < 5; i++) {
    let a = table.rows[i].cells[0].innerHTML;

    let b = table.rows[i].cells[1].innerHTML;

    let c = table.rows[i].cells[2].innerHTML;

    let d = table.rows[i].cells[3].innerHTML;

    let e = table.rows[i].cells[4].innerHTML;

    if (a === "" || b === "" || c === "" || d === "" || e === "") {
      continue;
    }
    if (a === b && b === c && c === d && d === e) {
      roundWin = true;

      break;
    }
  }
  for (let i = 0; i < 5; i++) {
    let a = table.rows[0].cells[i].innerHTML;

    let b = table.rows[1].cells[i].innerHTML;

    let c = table.rows[2].cells[i].innerHTML;

    let d = table.rows[3].cells[i].innerHTML;

    let e = table.rows[4].cells[i].innerHTML;

    if (a === "" || b === "" || c === "" || d === "" || e === "") {
      continue;
    }
    if (a === b && b === c && c === d && d === e) {
      roundWin = true;

      break;
    }
  }
  let a = table.rows[0].cells[0].innerHTML;

  let b = table.rows[1].cells[1].innerHTML;

  let c = table.rows[2].cells[2].innerHTML;

  let d = table.rows[3].cells[3].innerHTML;

  let e = table.rows[4].cells[4].innerHTML;

  if (a === b && b === c && c === d && d === e) {
    roundWin = true;
  }
  let f = table.rows[0].cells[4].innerHTML;

  let g = table.rows[1].cells[3].innerHTML;

  let h = table.rows[2].cells[2].innerHTML;

  let i = table.rows[3].cells[1].innerHTML;

  let j = table.rows[4].cells[0].innerHTML;

  if (f === g && g === h && h === i && i === j) {
    roundWin = true;
  }

  if (roundWin === true) {
    if (Turn % 2 === 0) {
      Turn = 0;
      alert("Player 2 won!");
      clearTable();
    } else {
      Turn = 0;
      alert("Player 1 won!");
      clearTable();
    }
    return;
  }
}
