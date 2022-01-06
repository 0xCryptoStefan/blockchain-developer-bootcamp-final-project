# Design Patterns

The design patterns used in this project are as follows:

| Design Pattern    | Usage                      |
|---                |---                         |
| Inheritance and Interfaces    | The smart contract inherits from the ERC-721, Counters, and Ownable interfaces defined in the OpenZeppelin template contracts. |
| Upgradable Contracts          | The smart contract implements a function to update the mintCost variable after publishing to the blockchain.  The smart contract also implements a pause/unpause function. |
| Access Control                | The withdraw function and mint cost adjusting functions are set to onlyOwner. |

