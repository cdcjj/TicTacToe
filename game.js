var helpers = require('./helpers.js');

function Game() {
  // initialize grid:
  this.grid = helpers.buildGrid();

}

Game.prototype = {
  checkWin: function() {
    // check vertical
    // check majordiagonal
    // check minordiagonal
    // check horizontal
  }
}
