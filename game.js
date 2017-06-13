var prompt = require('prompt');
var helpers = require('./helpers.js');

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
  };
  this.currentPlayer = this.player1;
  this.placed = 0;
  this.win = false;
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
    helpers.printGrid(this.grid);
    this.playerTurn();
  },
  playerTurn: function() {
    console.log(`Current Player: ${this.currentPlayer.name}`);
    prompt.get(['row', 'column'], (err, result) => {
      var row = result.row - 1;
      var column = result.column - 1;
      if (this.grid[row][column] !== ' ') {
        console.log('Spot has been taken, please select another spot');
        this.playerTurn();
        return;
      } else {
        this.grid[row][column] = this.currentPlayer.chip;
      }
      this.placed++;
      helpers.printGrid(this.grid);
      var won = this.checkWin(row, column, this.currentPlayer);
      if (won) {
        console.log(`${this.currentPlayer.name} has won! Congratulations!`);
        return;
      } else if (this.placed === 9 && !this.win) {
        console.log('End of game, tied score');
        return;
      }
      if (this.placed !== 9 || !this.win) {
        if (this.currentPlayer.chip === 'X') {
          this.currentPlayer = this.player2;
        } else {
          this.currentPlayer = this.player1;
        }
        this.playerTurn();
      }
    });
  },
}

var game = new Game();
var player2 = process.argv.pop();
var player1 = process.argv.pop();
game.startGame(player1, player2);
