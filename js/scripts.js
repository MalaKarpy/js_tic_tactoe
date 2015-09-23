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
  return this.mark; // or do this.state = mark, return this, space= space.setMark(x)
}
