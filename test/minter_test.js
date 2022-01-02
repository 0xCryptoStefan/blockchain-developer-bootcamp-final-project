/*

This file is based on the tests for SimpleBank.sol from the ConsenSys Blockchain Developer Bootcamp

---
The public version of the file used for testing can be found here: https://gist.github.com/ConsenSys-Academy/ce47850a8e2cba6ef366625b665c7fba

This test file has been updated for Truffle version 5.0. If your tests are failing, make sure that you are
using Truffle version 5.0. You can check this by running "trufffle version"  in the terminal. If version 5 is not
installed, you can uninstall the existing version with `npm uninstall -g truffle` and install the latest version (5.0)
with `npm install -g truffle`.
---

*/
const { catchRevert } = require("./exceptionsHelpers.js");
var Minter = artifacts.require("./Minter.sol");

contract("Minter", function (accounts) {
  const [contractOwner, alice] = accounts; // do I need to define some accounts for minting and owner?
//   const deposit = web3.utils.toBN(2);
let smartContract;
let inputAddress;
let contractAddress;
let contractABI;
let smartContractInstance;

  beforeEach(async () => {
    instance = await Minter.new();
    smartContract = await Minter.deployed();
    inputAddress = await smartContract.address;

    // Ganache instance of contract
    contractAddress = inputAddress;

    // Ganache-deployed contract ABI
    contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newID",
				"type": "uint256"
			}
		],
		"name": "Minted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllTokens",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "uri",
						"type": "string"
					}
				],
				"internalType": "struct Minter.allTokens[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "uri",
				"type": "string"
			}
		],
		"name": "mint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mintCost",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_state",
				"type": "bool"
			}
		],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newMintCost",
				"type": "uint256"
			}
		],
		"name": "setCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenID",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
]

    smartContractInstance = new web3.eth.Contract(contractABI, contractAddress)

  });

//   it("ready to be solved!", async() => {
//     const eth100 = 100e18;
//     assert.equal(await web3.eth.getBalance(alice), eth100.toString());
//   });

describe("Smart Contract Deployment", async () => {
  it("deploys successfully", async () => {
    const address = await smartContract.address;
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
  });

  it("has correct name", async () => {
    const name = await smartContract.contractName();
    assert.equal(name, "ConsenSys Blockchain Developer Bootcamp Final Project Smart Contract");
  });
});

describe("Permissions", () => {
  it("is owned by owner", async () => {
    assert.equal(
      // Hint:
      //   the error `TypeError: Cannot read property 'call' of undefined`
      //   will be fixed by setting the correct visibility specifier. See
      //   the following two links
      //   1: https://docs.soliditylang.org/en/v0.8.5/cheatsheet.html?highlight=visibility#function-visibility-specifiers
      //   2: https://docs.soliditylang.org/en/v0.8.5/contracts.html#getter-functions
      await instance.owner.call(),
      contractOwner,
      "owner is not correct",
    );
  });
});

// describe("Quick check", () => {
//   it("ownership checks", async () => {
//     let ownerFromContract = await instance.owner.call();
//     console.log("Owner from the contract: " + ownerFromContract);
//     console.log("Owner from the accounts: " + accounts[0]);
//     console.log("Next account from the accounts: " + accounts[1]);
//   });
// });

describe("Minting", () => {
  it("mints an NFT successfully to the owner", async () => {
    const uri = "https://example1.com"; // uri is set to a specific value only for testing
    await smartContract.mint(accounts[0], uri); // mint an NFT to accounts[0] with the associated uri
    const tokenURI = await smartContract.tokenURI(0); // get the uri associated with ID 0
    const balanceOfOwner = await smartContract.balanceOf(accounts[0]); // get the balance of tokens of accounts[0]
    assert.equal(tokenURI, uri); // check that the tokenURI set is the same as the input variable
    assert.equal(balanceOfOwner, 1); // check that the account balance of accounts[0] is correct having minted 1 NFT
    // console.log(tokenURI); // used this to validate the URI being passed through
  });
  
  it("mints an NFT successfully to someone other than the owner with the minting fee", async () => {

    // web3.eth.getBalance(contractAddress, function(err, result) {
    //   if (err) {
    //     console.log(err)
    //   } else {
    //     console.log("Contract address balance before user mint: " + web3.utils.fromWei(result, "ether") + " ETH")
    //   }
    // })

    const uri = "https://example2.com"; // uri is set to a specific value only for testing
    let mintCost = await smartContractInstance.methods.mintCost().call();
    // console.log("Mint cost: " + web3.utils.fromWei(mintCost, "ether") + " ETH");
    await smartContract.mint(accounts[1], uri, {from: accounts[1], value: mintCost}); // mint an NFT to accounts[0] with the associated uri
    const tokenURI = await smartContract.tokenURI(1); // get the uri associated with ID 1
    const balanceOfOwner = await smartContract.balanceOf(accounts[1]); // get the balance of tokens of accounts[0]
    assert.equal(tokenURI, uri); // check that the tokenURI set is the same as the input variable
    assert.equal(balanceOfOwner, 1); // check that the account balance of accounts[0] is correct having minted 1 NFT
    // console.log(tokenURI); // used this to validate the URI being passed through

    // web3.eth.getBalance(contractAddress, function(err, result) {
    //   if (err) {
    //     console.log(err)
    //   } else {
    //     console.log("Contract address balance after user mint: " + web3.utils.fromWei(result, "ether") + " ETH")
    //   }
    // })

  });  
});




// these Events tests work!
describe("Events", () => {
  it("should not break the OpenZeppelin event for Transfer", async () => {
      let eventEmitted = false;
      const uri = "https://example.com"; // uri is set to a specific value only for testing
      const tx = await smartContract.mint(accounts[0], uri);

      // console.log("Event 0 Emitted: " + tx.logs[0].event); // used these to validate the tx.logs[].event structure and how to call the event from the logs
      // console.log("Event 1 Emitted: " + tx.logs[1].event);

      if (tx.logs[0].event == "Transfer") {
        eventEmitted = true;
      }
  
      assert.equal(
        eventEmitted,
        true,
        "The OpenZeppelin event for Transfer has been broken",
      );
    });

    it("should emit a Minted event when an NFT is minted", async () => {
      let eventEmitted = false;
      const uri = "https://example.com"; // uri is set to a specific value only for testing
      const tx = await smartContract.mint(accounts[0], uri);

      // console.log("Event 0 Emitted: " + tx.logs[0].event); // used these to validate the tx.logs[].event structure and how to call the event from the logs
      // console.log("Event 1 Emitted: " + tx.logs[1].event);

      if (tx.logs[1].event == "Minted") {
        eventEmitted = true;
      }
  
      assert.equal(
        eventEmitted,
        true,
        "minting an NFT should emit a Minted event",
      );
    });
  });


//   describe("Variables", () => {
//     it("should have an owner", async () => {
//       assert.equal(typeof instance.owner, 'function', "the contract has no owner");
//     });

//     it("should have an _tokenURIs", async () => {
//       assert.equal(typeof instance._tokenURIs, 'function', "the contract has no _tokenURIs variable");
//     });
// });





//   describe("allTokens struct", () => {
//     let subjectStruct;

//     before(() => {
//       subjectStruct = allTokens(Minter);
//       assert(
//         subjectStruct !== null, 
//         "The contract should define an `allTokens` struct"
//             );
//         });
//         it("should have an `ID`", () => {
//             assert(
//               isDefined(subjectStruct)("ID"), 
//               "Struct Item should have an `ID` member"
//             );
//             assert(
//               isType(subjectStruct)("ID")("uint256"), 
//               "`ID` should be of type `utin256`"
//             );
//           });    
//     });
//   it("should mark addresses as enrolled", async () => {
//     await instance.enroll({ from: alice });

//     const aliceEnrolled = await instance.enrolled(alice, { from: alice });
//     assert.equal(
//       aliceEnrolled,
//       true,
//       "enroll balance is incorrect, check balance method or constructor",
//     );
//   });

//   it("should not mark unenrolled users as enrolled", async () => {
//     const ownerEnrolled = await instance.enrolled(contractOwner, { from: contractOwner });
//     assert.equal(
//       ownerEnrolled,
//       false,
//       "only enrolled users should be marked enrolled",
//     );
//   });

//   it("should deposit correct amount", async () => {
//     await instance.enroll({ from: alice });
//     await instance.deposit({ from: alice, value: deposit });
//     const balance = await instance.getBalance.call({ from: alice });

//     assert.equal(
//       deposit.toString(),
//       balance,
//       "deposit amount incorrect, check deposit method",
//     );
//   });

//   it("should log a deposit event when a deposit is made", async () => {
//     await instance.enroll({ from: alice });
//     const result = await instance.deposit({ from: alice, value: deposit });

//     const expectedEventResult = { accountAddress: alice, amount: deposit };

//     const logAccountAddress = result.logs[0].args.accountAddress;
//     const logDepositAmount = result.logs[0].args.amount.toNumber();

//     assert.equal(
//       expectedEventResult.accountAddress,
//       logAccountAddress,
//       "LogDepositMade event accountAddress property not emitted, check deposit method",
//     );

//     assert.equal(
//       expectedEventResult.amount,
//       logDepositAmount,
//       "LogDepositMade event amount property not emitted, check deposit method",
//     );
//   });

//   it("should withdraw correct amount", async () => {
//     const initialAmount = 0;
//     await instance.enroll({ from: alice });
//     await instance.deposit({ from: alice, value: deposit });
//     await instance.withdraw(deposit, { from: alice });
//     const balance = await instance.getBalance.call({ from: alice });

//     assert.equal(
//       balance.toString(),
//       initialAmount.toString(),
//       "balance incorrect after withdrawal, check withdraw method",
//     );
//   });

//   it("should not be able to withdraw more than has been deposited", async () => {
//     await instance.enroll({ from: alice });
//     await instance.deposit({ from: alice, value: deposit });
//     await catchRevert(instance.withdraw(deposit + 1, { from: alice }));
//   });

//   it("should emit the appropriate event when a withdrawal is made", async () => {
//     const initialAmount = 0;
//     await instance.enroll({ from: alice });
//     await instance.deposit({ from: alice, value: deposit });
//     var result = await instance.withdraw(deposit, { from: alice });

//     const accountAddress = result.logs[0].args.accountAddress;
//     const newBalance = result.logs[0].args.newBalance.toNumber();
//     const withdrawAmount = result.logs[0].args.withdrawAmount.toNumber();

//     const expectedEventResult = {
//       accountAddress: alice,
//       newBalance: initialAmount,
//       withdrawAmount: deposit,
//     };

    // assert.equal(
    //   expectedEventResult.accountAddress,
    //   accountAddress,
    //   "LogWithdrawal event accountAddress property not emitted, check deposit method",
    // );
    // assert.equal(
    //   expectedEventResult.newBalance,
    //   newBalance,
    //   "LogWithdrawal event newBalance property not emitted, check deposit method",
    // );
    // assert.equal(
    //   expectedEventResult.withdrawAmount,
    //   withdrawAmount,
    //   "LogWithdrawal event withdrawalAmount property not emitted, check deposit method",
    // );
//   });
});
