# Blockchain Developer Bootcamp Final Project

## Dependencies
- dotenv
- web3
- openzeppelin-soidity
- truffle/hdwallet-provider
<br/>
Install dependencies using:<br/>
`npm install`<br/>

`npm init -y`<br/>
`npm add`<br/>
`npm install --save-exact openzeppelin-solidity` -  is this correct?<br/>
`npm install dotenv`<br/>
`npm install @truffle/hdwallet-provider`

## Starting the client application
Open the project in VSCode and use the Live Server plugin to open ./frontend/index.html in the browser.

## Running Smart Contract tests
`truffle test`

## Deployed Address
https://blockchain-developer-bootcamp-final-project-gamma.vercel.app/
<br/>

# Original ReadMe prior to starting the project

## My aims
<ul>
  <li>I want to connect a front-end dApp to a back-end Smart Contract</li>
  <li>I want to store something on the Blockchain as an immutable object</li>
  <li>I want to create something that is fun</li>
  <li>I want to create something that could have additional utility</li>
</ul>

## My potential project
<ul>
  <li>Creating a dApp that mints a random fun unique NFT on the blockchain</li>
  <li>The NFT might be an image or simply text</li>
  <li>The NFT may take some form of user input in the generation process</li>
  <li>The NFT may make use of Chainlink VRF in the generation process</li>
</ul>

## Potential project description
An NFT minting dApp that allows a user to mint an ERC-721 compliant NFT, based on their input, and will also display in the dApp all NFTs minted through the dApp by the user based on the contents of their wallet (i.e. show all of their NFTs minted through the dApp).

The dApp will allow the user to connect their wallet by clicking a button in the front-end application to pop up the MetaMask interface, provide input to be included in their NFT (possibly manipulated or hashed in some way e.g. to create a pastel colour scheme and then words on that background), pay a fee, mint an NFT, view their minted NFTs.

## Expansion idea
Allow the user to access additional features or content on the dApp based on the contents of their wallet, i.e. holding a specific ERC-20 token or ERC-721 NFT.  This provides a use case for specific tokens beyond just being minted. It provides a form of access control.