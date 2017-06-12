var readline = require('readline');
var helpers = require('./helpers.js');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Game() {
  // initialize grid:
  this.grid = helpers.buildGrid();
  this.player1 = {
    name: '',
    chip: 'X',
  };
  this.player2 = {
    name: '',
    chip: 'O',
  }
}

Game.prototype = {
  checkWin: function(i, j, player) {
    const vertical = helpers.checkVertical(i, j, player.chip, this.grid);
    const horizontal = helpers.checkHorizontal(i, j, player.chip, this.grid);
    const diagonal = helpers.checkDiagonal(player.chip, this.grid);
    if (vertical || horizontal || diagonal) {
      return true;
    }
    return false;
  },
  startGame: function(player1, player2) {
    this.player1.name = player1;
    this.player2.name = player2;
    console.log(`${player1} is Player 1 with chip 'X' \n ${player2} is Player 2 with chip 'O'`);
  }
}

Game();
rl.question('Please input the name of Player 1', (response) => {
  var player1 = response;
  console.log('player 1 is: ', reponse);
  rl.close();
});
rl.question('Please input the name of Player 2', (answer) => {
  var player2 = answer;
  console.log('player 2 is: ', answer);
  rl.close();
});
