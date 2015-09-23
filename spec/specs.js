describe('Player', function() {
  it("returns the player's mark", function() {
    var testPlayer = new Player("X");
    expect(testPlayer.mark).to.equal("X");
  });
});

describe('Space', function() {
  it("returns the correct x-coordinate", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.x_coordinate).to.equal(1);
  });

  it("returns the correct y-coordinate", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.y_coordinate).to.equal(2);
  });

  it("returns an empty state for a blank space", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.getState()).to.be.empty;
  });

  it("returns a mark in an occupied space", function() {
    var testPlayer = new Player("X");
    var testSpace = new Space(1,2);
    testSpace.setMark(testPlayer);
    expect(testSpace.getState()).to.equal(testPlayer);
  })

  it("lets a player mark a space", function() {
      var testPlayer = new Player("X");
      var testSpace = new Space(1,2);
      testSpace.setMark(testPlayer)
      expect(testSpace.getMark()).to.equal(testPlayer);
   });

  it("assigns a mark to the correct space", function() {
     var testPlayer = new Player("X");
     var otherPlayer = new Player("O");
     var testSpace = new Space(1,2);
     testSpace.setMark(testPlayer);
     expect(testSpace.getMark()).to.not.equal(otherPlayer);
  });
});

describe('Board', function() {
  it("creates the correct number of rows when it is initialized", function() {
    var testBoard = new Board(9);
    var board = testBoard.create();
    expect(board.length).to.eql(3);
    expect(board[0].length).to.eql(3);
   });

  it("finds a space given its coordinates", function() {
    // var testBoard = new Board(9);
    // var board = testBoard.create();
    // expect(board.findSpace(2,2)).to.eql(new Space(2,2));
  })

});
