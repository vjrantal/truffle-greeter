contract('Greeter', function (accounts) {
  it('should return the defined greeting', function () {
    var greeter = Greeter.deployed();

    return greeter.greet().then(function (greeting) {
      assert.equal(greeting, 'Hello from the Truffle Greeter!');
    });
  });
});
