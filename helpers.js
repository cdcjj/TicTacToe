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
    for (var i = 0; i < 3; i++) {
      grid[i] = grid[i].join(' | ');
    }
    return grid.join('\n---------\n');
  },
  
}
