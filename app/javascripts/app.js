var accounts;
var account;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function refreshGreeting() {
  Greeter.deployed().then(function(greeter) {
    greeter.greet.call({from: account}).then(function(value) {
      var greeting_element = document.getElementById("greeting");
      greeting_element.innerHTML = value.valueOf();
    }).catch(function(e) {
      console.log(e);
      setStatus("Error getting greeting; see log.");
    });
  });
};

function kill() {
  setStatus("Initiating transaction... (please wait)");

  Greeter.deployed().then(function(greeter) {
    greeter.kill.call({from: account}).then(function() {
      setStatus("Called kill from the Greeter");
    }).catch(function(e) {
      console.log(e);
      setStatus("Error killing; see log.");
    });
  });
};

window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length === 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];

    refreshGreeting();
  });
};
