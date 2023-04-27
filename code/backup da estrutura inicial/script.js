const squares = document.querySelectorAll('.square');
let player = 'X';
let gameOver = false;

function handleMove(square) {
  if (!gameOver && square.innerText === '') {
    square.innerText = player;
    checkForWin();
    player = player === 'X' ? 'O' : 'X';
  }
}

function checkForWin() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (
      squares[a].innerText &&
      squares[a].innerText === squares[b].innerText &&
      squares[a].innerText === squares[c].innerText
    ) {
      alert(`Player ${player} wins!`);
      gameOver = true;
      return;
    }
  }
}

squares.forEach((square) => {
  square.addEventListener('click', () => {
    handleMove(square);
  });
});
