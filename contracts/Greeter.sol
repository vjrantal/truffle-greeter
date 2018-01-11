pragma solidity ^0.4.4;

contract Mortal {
    /* Define variable owner of the type address */
    address public owner;

    /* This function is executed at initialization and sets the owner of the contract */
    function Mortal() public {
        owner = msg.sender;
    }

    /* Function to recover the funds on the contract */
    function kill() public {
        if (msg.sender == owner) {
            selfdestruct(owner);
        }
    }
}

contract Greeter is Mortal {
    /* Define variable greeting of the type string */
    string public greeting = "Hello from the Truffle Greeter!";

    /* The main function */
    function greet() public constant returns (string) {
        return greeting;
    }
}
