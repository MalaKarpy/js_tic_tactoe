function Player(mark) {
  this.mark = mark;
  return mark;
}

function Space(x, y) {
  this.x = x;
  this.y = y;
  this.state = "";
  this.isOccupied = false;
}

Space.prototype.setMark = function(mark) {
  if (this.isOccupied) {
    alert("This space is taken! Choose another");
  } else {
    this.mark = mark;
    this.isOccupied = true;
  }
}

Space.prototype.getMark = function() {
  return this.mark;
}
