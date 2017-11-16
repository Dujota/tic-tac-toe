document.addEventListener('DOMContentLoaded', () => {

  // vars
  const cells = document.querySelectorAll('.cell');
  const start = document.querySelector('.start');
  const end = document.querySelector('.end');
  const grid = document.getElementById('showgrid')
  let player = "X"
  let gameArray = [
    0,0,0,
    0,0,0,
    0,0,0]

  start.addEventListener('click', (e) => {
    console.log('click');
    for (let cell of cells) {
        cell.innerText = " ";
      }
      gameArray = [
        0,0,0,
        0,0,0,
        0,0,0]``
  });

  function win() {
    if ((gameArray[0]!= 0 && gameArray[0] === gameArray[1] && gameArray[1] === gameArray[2])||
  (gameArray[3]!= 0 && gameArray[3] === gameArray[4] && gameArray[4] === gameArray[5])||
(gameArray[6]!= 0 && gameArray[6] === gameArray[7] && gameArray[7] === gameArray[8])||
(gameArray[0]!= 0 && gameArray[0] === gameArray[3] && gameArray[3] === gameArray[6])||
(gameArray[1]!= 0 && gameArray[1] === gameArray[4] && gameArray[4] === gameArray[7])||
(gameArray[2]!= 0 && gameArray[2] === gameArray[5] && gameArray[5] === gameArray[8])||
(gameArray[0]!= 0 && gameArray[0] === gameArray[4] && gameArray[4] === gameArray[8])||
(gameArray[2]!= 0 && gameArray[2] === gameArray[4] && gameArray[4] === gameArray[6])) {
  turn()
      alert(player+" Wins")
    } else if (!gameArray.includes(0)) {  // ! is inverse of ture
      alert("Draw")
    }
  }

  function turn() {
    if (player === 'X') {
      player = "O";
      return "X";
    } else {
      player = 'X';
      return "O";
    };
  };

  grid.addEventListener('click', (e) => {
    if (e.target.parentNode.className === "row" && e.target.innerText === "") {
      let playerTurn = turn()
      e.target.innerHTML = playerTurn
      gameArray[Number(e.target.id)-1]= playerTurn
      win();
    }



  });





});
