var Greeter = artifacts.require("./Greeter.sol");

contract('Greeter', function (accounts) {
  it('should return the defined greeting', function () {
    Greeter.deployed().then(function(greeter) {
      return greeter.greet().then(function (greeting) {
        assert.equal(greeting, 'Hello from the Truffle Greeter!');
      });
    });
  });
});
