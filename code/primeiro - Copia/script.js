const squares = document.querySelectorAll('.square');
const square = document.querySelector('.square');
let player = 'X';
let gameOver = false;


var corX = '#a52a2a'
var corO = '#4682B4'


const tabuleiro = document.querySelector('.tabuleiro');
const board = document.querySelector('.board');
const button = document.querySelector('.reiniciar__button');

function handleMove(square) {
  if (!gameOver && square.innerText === '') {
    square.innerText = player;
    if (player == 'X') {
      square.style.backgroundColor = corX;
      square.style.color = '#f5f5f5'
    } else {
      square.style.backgroundColor = corO;
      square.style.color = '#f5f5f5'
    }
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
    console.log(squares.innerText);
    if (
      squares[a].innerText &&
      squares[a].innerText === squares[b].innerText &&
      squares[a].innerText === squares[c].innerText
      
    ) {
      player = player === 'X' ? 'O' : 'X'
      setTimeout(ganhou, 25);
      
    }
  }
}

squares.forEach((square) => {
  square.addEventListener('click', () => {
    handleMove(square);
  });
});

function ganhou(){
  if (gameOver = false) {
    button.setAttribute('disabled', '');
  }
  gameOver = true;
  alert(`player ${player} ganhou`);
  button.removeAttribute('disabled');
  board.classList.add('tabuleiro__virar');


  return;
}

function recarregarAPagina(){
  window.location.reload();
}