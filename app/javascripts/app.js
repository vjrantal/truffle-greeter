var accounts;
var account;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function refreshGreeting() {
  var greeter = Greeter.deployed();

  greeter.greet.call({from: account}).then(function(value) {
    var greeting_element = document.getElementById("greeting");
    greeting_element.innerHTML = value.valueOf();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting greeting; see log.");
  });
};

function kill() {
  var greeter = Greeter.deployed();

  setStatus("Initiating transaction... (please wait)");

  greeter.kill.call({from: account}).then(function(result) {
    if (result === false) {
      setStatus("Only the owner can kill the Greeter!");
    } else {
      setStatus("Killed the Greeter!");
    }
  }).catch(function(e) {
    console.log(e);
    setStatus("Error killing; see log.");
  });
};

window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];

    refreshGreeting();
  });
}
