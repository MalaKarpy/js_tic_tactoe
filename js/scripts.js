function Player(mark) {
  this.mark = mark;
  return mark;
}

function Space(x_coordinate, y_coordinate) {
  this.x_coordinate = x_coordinate;
  this.y_coordinate = y_coordinate;
  this.state = "";
  this.isOccupied = false;
}

Space.prototype.getState = function() {
  return this.state;
}

Space.prototype.setMark = function(mark) {
  if (this.isOccupied) {
    alert("This space is taken! Choose another");
  } else {
    this.mark = mark;
    this.state = mark;
    this.isOccupied = true;
  }
}

Space.prototype.getMark = function() {
  return this.mark;
}

function Board(spaces) {
  this.spaces = spaces;
  this.grid = [];
}

Board.prototype.create = function() {
  var x,y;
  var rows = Math.sqrt(this.spaces);
  for(x = 0; x < rows; x++){
    this.grid[x] = [];
    for(y = 0; y < rows; y++){
      this.grid[x][y] = new Space(x + 1, y + 1);
    }
  }
  return this.grid;
};

Board.prototype.findSpace = function(x_coordinate, y_coordinate) {
  return this.board[x_coordinate][y_coordinate];
}
