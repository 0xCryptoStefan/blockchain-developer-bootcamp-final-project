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

  beforeEach(async () => {
    instance = await Minter.new();
    smartContract = await Minter.deployed();
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
    assert.equal(name, "Smart Contract");
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

describe("Minting", () => {
  it("mints an NFT successfully", async () => {
    const uri = "https://example.com"; // uri is set to a specific value only for testing
    await smartContract.mint(accounts[0], uri); // mint and NFT to accounts[0] with the associated uri
    const tokenURI = await smartContract.tokenURI(0); // get the uri associated with ID 0
    const balanceOfOwner = await smartContract.balanceOf(accounts[0]); // get the balance of tokens of accounts[0]
    assert.equal(tokenURI, uri); // check that the tokenURI set is the same as the input variable
    assert.equal(balanceOfOwner, 1); // check that the account balance of accounts[0] is correct having minted 1 NFT
  });
});


describe("Events", () => {
  it("should emit a Minted event when an NFT is minted", async () => {
      let eventEmitted = false;
      const uri = "https://example.com"; // uri is set to a specific value only for testing
      const tx = await smartContract.mint(accounts[0], uri);
  
      console.log(tx.logs[0]);
      
      assert.equal(tx.logs[0],"Minted");

      // if (tx.logs[0].event == "Minted") {
      //   eventEmitted = true;
      // }
  
      // assert.equal(
      //   eventEmitted,
      //   true,
      //   "minting an NFT should emit a Minted event",
      // );
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
