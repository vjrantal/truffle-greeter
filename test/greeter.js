contract('Greeter', function(accounts) {
  it("should return the defined greeting", function(done) {
    var greeter = Greeter.deployed();

    return greeter.greet.call().then(function(greeting) {
      assert.equal(greeting, "Hello from the Truffle Greeter!");
      done();
    });
  });

  it("should not be killable by non-owners", function(done) {
    var greeter = Greeter.deployed();

    return greeter.kill.call().then(function(result) {
      assert.equal(result, false);
      done();
    });
  });
});
