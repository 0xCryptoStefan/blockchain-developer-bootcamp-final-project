const SimpleStorage = artifacts.require("./SimpleStorage.sol");

contract("SimpleStorage", accounts => {
  // Added this test to validate the simplestorage contract from the truffle unbox react is deploying
  describe("Smart Contract Deployment", async () => {
    it("deploys successfully", async () => {
      const simpleStorageInstance = await SimpleStorage.deployed();
      const address = await simpleStorageInstance.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
    });      
  });

  // this is the original set of tests for truffle unbox react and simple storage
  describe("Original Simple Storage Tests", async () => {
    it("...should store the value 89.", async () => {
      const simpleStorageInstance = await SimpleStorage.deployed();

      // Set value of 89
      await simpleStorageInstance.set(89, { from: accounts[0] });

      // Get stored value
      const storedData = await simpleStorageInstance.get.call();

      assert.equal(storedData, 89, "The value 89 was not stored.");
    });
  });
  
});
