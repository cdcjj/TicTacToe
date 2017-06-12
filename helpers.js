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
    grid.unshift(['    1   2   3']);
    for (var i = 1; i < 4; i++) {
    	grid[i].unshift(i);
      grid[i] = grid[i].join(' | ');
    }
    return grid.join('\n--------------\n');
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
  };
}
