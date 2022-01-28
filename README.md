# Blockchain Developer Bootcamp Final Project

## Project description
A public note publishing dApp using NFTs that allows a user to mint an ERC-721 compliant NFT. The user provides their input to mint their public note on the blockchain as a NFT. The dApp also allows a user to see all minted public notes.

The dApp allows the user to connect their wallet by clicking a button in the front-end application to pop up the MetaMask interface, provide input to be included in their NFT (their public note), pay a fee, mint the note as an NFT, and view all minted NFT notes.

## Directory Structure

| Folder        | Contents                                                                          |
|---            |---                                                                                |
| contracts     | Smart contract as deployed on the Kovan testnet                                   |
| docs          | Project documentation for deployed address, security and design patterns          |
| frontend      | Front-end client application to interact with the deployed smart contract         |
| migrations    | Migration scripts for deploying the smart contracts in the contracts directory    |
| test          | Unit tests for validating the smart contract                                      |

## Public Ethereum Address for Certification
`0x93d99aaA8533A27DF5e5dE688915D7697aea7e34`

## Dependencies
- dotenv
- web3
- openzeppelin-soidity
- truffle/hdwallet-provider

Install dependencies using:<br/>
`npm install`

## Starting the client application
Open the project in VSCode and use the Live Server plugin to open ./frontend/index.html in the browser.

## Running Smart Contract tests
Have a Ganache server running on port 8545 and run `truffle test`

## Deployed Address
https://blockchain-developer-bootcamp-final-project-gamma.vercel.app/

## Screencast
https://youtu.be/IsY7N7EwjtY