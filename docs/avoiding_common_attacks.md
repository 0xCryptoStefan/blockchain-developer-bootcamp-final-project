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

### Additional Mitigations

Items in course:
- tx.origin
- Integer under/over flow
- Denial of Service
- Re-entrancy

Mitigations:
- Role Based Access Control
- onlyOwner modifier