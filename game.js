var helpers = require('./helpers.js');

function Game(player1, player2) {
  // initialize grid:
  this.grid = helpers.buildGrid();
  this.player1 = {
    name: player1,
    chip: 'X',
  };
  this.player2 = {
    name: player2,
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
  
}
