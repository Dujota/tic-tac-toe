document.addEventListener('DOMContentLoaded', () => {

  // constant variables
  const cells = document.querySelectorAll('.cell');
  const start = document.querySelector('.start');
  const end = document.querySelector('.end');
  const grid = document.getElementById('showgrid')
  // mutable variables
  let player = "X"
  let gameArray = [
    0,0,0,
    0,0,0,
    0,0,0]

// resets the game by clearing the grid and gameArray to "default"
  start.addEventListener('click', (e) => {
    for (let cell of cells) {
        cell.innerText = " ";
      }
      gameArray = [
        0,0,0,
        0,0,0,
        0,0,0]
  });

// all the winning combinations based on where the x & o land on the gameArray
  function win() {
    if (
      (gameArray[0]!= 0 && gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2])||
      (gameArray[3]!= 0 && gameArray[3] === gameArray[4] && gameArray[4] === gameArray[5])||
      (gameArray[6]!= 0 && gameArray[6] === gameArray[7] && gameArray[7] === gameArray[8])||
      (gameArray[0]!= 0 && gameArray[0] === gameArray[3] && gameArray[3] === gameArray[6])||
      (gameArray[1]!= 0 && gameArray[1] === gameArray[4] && gameArray[4] === gameArray[7])||
      (gameArray[2]!= 0 && gameArray[2] === gameArray[5] && gameArray[5] === gameArray[8])||
      (gameArray[0]!= 0 && gameArray[0] === gameArray[4] && gameArray[4] === gameArray[8])||
      (gameArray[2]!= 0 && gameArray[2] === gameArray[4] && gameArray[4] === gameArray[6])
      )
    {
      turn()
      alert(player+" Wins") // if conditions for a win met, push alert for winner
    } else if (!gameArray.includes(0)) {  // ! is inverse of true
      alert("Draw") // if array is full, but no winning combo, display draw
    }
  }

// player 1 = X, when they take a turn, swtich turns & return value of the player's marking on the square X or O
  function turn() {
    if (player === 'X') {
      player = "O";
      return "X";
    } else {
      player = 'X';
      return "O";
    };
  };
// lsiten on the grid itself (Parent container) and isolate (target) the square that triggers the click event
  grid.addEventListener('click', (e) => {
    if (e.target.parentNode.className === "row" && e.target.innerText === "") {
      let playerTurn = turn() // set player turn to the return value of the turn function based on whos turn it is
      e.target.innerHTML = playerTurn // mark the box that triggers the click event with the value set earlier
      gameArray[Number(e.target.id)-1]= playerTurn  // assign the value that is passed into the box from above into gameArray at the index # of the div's id & convert it from string to integer
      win(); // check for a winner/draw at the end of every turn
    }
  });
});
