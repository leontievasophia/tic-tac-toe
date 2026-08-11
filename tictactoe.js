let playerO = "O";
let playerX = "X";
let curentPlayer = playerO;

let gameBord = ["", "", "", "", "", "", "", "", ""];
let gameCells;
let restarteBTN;

let winningConditions=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];

let gameOver = false;

window.onload = function () {
  gameCells = document.getElementsByClassName("game-cell");
  

  for (let cell of gameCells) {
    cell.addEventListener("click", placeCall);
  }
restarteBTN = document.getElementById("game-restart-button");
restarteBTN.addEventListener("click", restartegame);
};

function placeCall() {
    if(gameOver){
        return;
    };
  const index = parseInt(this.getAttribute("data-cell-index"));

  if (gameBord[index] != "") {
    return;
  }

  this.innerText = curentPlayer;
  gameBord[index] = curentPlayer;

  if (curentPlayer == playerO) {
    curentPlayer = playerX;
  } else {
    curentPlayer = playerO;
  }

  checWinner();

  

  };
  function checWinner(){
     for (let winCondition of winningConditions) {

    let a = gameBord[winCondition[0]];
    let b = gameBord[winCondition[1]];
    let c = gameBord[winCondition[2]];

    if (a == b && b == c && a != "") {

      for (let i = 0; i < gameBord.length; i++) {

        if (winCondition.includes(i)) {
          gameCells[i].classList.add("winning-game-cell");
        }

      }
      gameOver=true;
      return;
    }
  }


  };
function restartegame() {
  gameOver = false;
  curentPlayer = playerO;

  gameBord = ["", "", "", "", "", "", "", "", ""];

  for (let cell of gameCells) {
    cell.innerText = "";
    cell.classList.remove("winning-game-cell");
  }
}


