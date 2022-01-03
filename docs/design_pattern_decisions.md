# Design Patterns

The design patterns used in this project are as follows:
- Inheritance and Interfaces: The smart contract inherits from the ERC-721, Counters, and Ownable interfaces defined in the OpenZeppelin template contracts.
- Upgradable Contracts: The smart contract implements a function to update the mintCost variable after publishing to the blockchain.  The smart contract also implements a pause/unpause function.
- Access Control: The withdraw function and mint cost adjusting functions are set to onlyOwner.

## Items to review

Below is a list of design patterns in the Smart Contract chapter, along with a short description and the title of the lesson where it’s mentioned. To meet the requirement, you need only two of the following, documented in your design_pattern_decisions.md:

- Inter-Contract Execution (Calling functions in external contracts) Inter-Contract Execution, Part 1 and Part 2

- Inheritance and Interfaces (Importing and extending contracts and/or using contract interfaces) Inheritances and Interfaces — (note: this is already a requirement in the final project, so you can simply describe which library or interface you use)

- Oracles (retrieving third-party data) Off-Chain Oracles and Chapter 5: Second-Order Effects — Oracles Revisited

- Access Control Design Patterns (Restricting access to certain functions using things like Ownable, Role-based Control) Access Control Design Patterns

- Upgradable Contracts (Ways to update a deployed contract’s logic or data) Upgradable Contracts and Additional Material: Upgradable Contracts

- Optimizing Gas (Creating more efficient Solidity code) Optimizing Gas
