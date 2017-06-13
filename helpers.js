module.exports = {
  buildGrid: function() {
  	var grid = [];
    for (var i = 0; i < 3; i++) {
    	grid.push([]);
    	for (var j = 0; j < 3; j++) {
      	grid[i].push(' ');
      }
    }
    return grid;
  },
  printGrid: function(grid) {
    var print = grid.slice();
    print.unshift(['    1   2   3']);
    for (var i = 1; i < 4; i++) {
      print[i] = grid[i-1].slice();
    	print[i].unshift(i);
      print[i] = print[i].join(' | ');
    }
    console.log(print.join('\n--------------\n'));
  },
  checkVertical: function(i, j, playerChip, grid) {
    // top piece
    if (i - 1 < 0) {
      if (grid[i+1][j] === playerChip && grid[i+2][j] === playerChip){
        return true;
      }
      return false;
    // bottom piece
    } else if (i + 1 > grid.length - 1) {
      if (grid[i-1][j] === playerChip && grid[i-2][j] === playerChip) {
        return true;
      }
      return false;
    // middle piece
    } else if (i - 1 === 0) {
      if (grid[i-1][j] === playerChip && grid[i+1][j] === playerChip) {
        return true;
      }
      return false;
    }
    return false;
  },
  checkHorizontal: function(i, j, playerChip, grid) {
    // left piece
    if (j - 1 < 0) {
      if (grid[i][j + 1] === playerChip && grid[i][j+2] === playerChip) {
        return true;
      }
      return false;
    // right piece
    } else if (j + 1 > grid.length - 1) {
      if (grid[i][j-1] === playerChip && grid[i][j+1] === playerChip) {
        return true;
      }
      return false;
    // middle piece
    } else if (j - 1 === 0) {
      if (grid[i][j-1] === playerChip && grid[i][j+1] === playerChip) {
        return true;
      }
      return false;
    }
    return false;
  },
  checkDiagonal: function(playerChip, grid) {
    var i = 1;
    var j = 1;

    // check if player able to make diagonal
    if (grid[i][j] === playerChip) {
      // check major diagonal
      if (grid[i-1][j-1] === playerChip && grid[i+1][j+1] === playerChip) {
        return true;
      // check minor diagonal
      } else if (grid[i+1][j-1] === playerChip && grid[i-1][j+2] === playerChip) {
        return true;
      }
    }
    return false;
  },
  alternateTurns: function(currentPlayer, grid) {

  },
}
