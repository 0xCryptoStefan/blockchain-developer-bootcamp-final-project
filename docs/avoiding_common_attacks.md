# Avoiding Common Attacks

This project makes use of the following security measures to mitigate against common attack vectors in smart contracts.

| SWC Ref    | Description                       | Implementation |
|---         |---                                |---             |
| SWC-100    | Function Default Visibility       | Functions have been specified as being external, public, internal or private. This is to avoid a malicious user being able to make unauthorised or unintended state changes|
| SWC-102    | Outdated Compiler Version         | Using most recent major version of Solidity 0.8.0 |
| SWC-103    | Floating Pragma                   | Specific compiler pragma `0.8.0` used in contracts to avoid accidental bug inclusion through outdated compiler versions. |
| SWC-131    | Presence of unused variables      | All unused variables have been removed from the code base. |
| SWC-135    | Code With No Effects              | Unit tests have been written to verify the smart contract functionality. |

<br/>

## Items to review

Below is a list of attack vectors and / or security measures from the course, specifically Solidity Pitfalls and Attacks and Smart Contract Pitfalls and Attacks. It is okay for some of these to overlap with design patterns, but you can list at least two of them in avoiding_common_attacks.md:

### From Solidity Pitfalls and Attacks
- Using Specific Compiler Pragma 
- Proper Use of Require, Assert and Revert 
- Use Modifiers Only for Validation 
- Pull Over Push (Prioritize receiving contract calls over making contract calls)
- Checks-Effects-Interactions (Avoiding state changes after external calls)
- Proper use of .call and .delegateCall

### From Smart Contract Pitfalls and Attacks
Not everything can be avoided, but you can write if you’re taking protection against:
- Re-entrancy
- Timestamp Dependence
- Forcibly Sending Ether
- Tx.Origin Authentication

Mitigations:
- Role Based Access Control
- onlyOwner modifier