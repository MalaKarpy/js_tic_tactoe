describe('getScore', function() {
  it("is 13 for getScore [A, 2]", function() {
    var deck = ['A', '2'];
    expect(getScore(deck)).to.equal(13);
  });
});
