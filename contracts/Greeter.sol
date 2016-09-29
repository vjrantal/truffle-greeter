contract Mortal {
    /* Define variable owner of the type address*/
    address owner;

    /* this function is executed at initialization and sets the owner of the contract */
    function mortal() {
        owner = msg.sender;
    }

    /* Function to recover the funds on the contract */
    function kill() returns (bool) {
        if (msg.sender == owner) {
            selfdestruct(owner);
            return true;
        } else {
            return false;
        }
    }
}

contract Greeter is Mortal {
    /* define variable greeting of the type string */
    string greeting = "Hello from the Truffle Greeter!";

    /* this runs when the contract is executed */
    function greeter(string _greeting) public {
        greeting = _greeting;
    }

    /* main function */
    function greet() constant returns (string) {
        return greeting;
    }
}
