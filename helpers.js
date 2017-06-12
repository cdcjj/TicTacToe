function buildGrid() {
	let grid = [];
  for (var i = 0; i < 3; i++) {
  	grid.push([]);
  	for (var j = 0; j < 3; j++) {
    	grid[i].push('');
    }
  }
  return grid;
}

let grid = buildGrid();
