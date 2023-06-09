// Elementos do DOM
const player1Element = document.getElementById('player1');
const player2Element = document.getElementById('player2');

const player1Name = prompt('Digite o nome do Jogador X:');
const player2Name = prompt('Digite o nome do Jogador O:');

player1Element.innerText = player1Name || 'JOGADOR X';
player2Element.innerText = player2Name || 'JOGADOR O';