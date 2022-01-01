// SPDX-License-Identifier: MIT

pragma solidity 0.8.0; // using ^0.8.0 as getting an error but would like to fix the version to 0.8.0 specifically based on the sceurity recommendation in the course

import "openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";
import "openzeppelin-solidity/contracts/utils/Counters.sol";
import "openzeppelin-solidity/contracts/access/Ownable.sol"; // using this for now as simpler to implement than full RBAC


/// @title A minter for Non-Fungible Tokens
/// @author 0xCryptoStefan
/// @notice This contract allows you to to mint a NFT associated with this project
/// @dev This contract inherits from the OpenZeppelin standard templates specified above and add specific function overrides where required
contract Minter is ERC721, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;
    Counters.Counter _tokenIDs;
    mapping(uint256 => string) _tokenURIs; // this line is to map the tokenIDs to the tokenURIs for the images / metadata associated with the NFT
    string public contractName = "ConsenSys Blockchain Developer Bootcamp Final Project Smart Contract";
    uint256 public mintCost = 0.01 ether; // when updating the mintCost with the function, this needs to be provided in wei
    bool public paused = false;

/* 
* Events
*/

// <LogForSale event: sku arg>
event Minted(uint256 newID);
// <LogSold event: sku arg>
// event LogSold(uint sku);



    // Do I need to declare this as public?  This is intended to simplify pulling all minted NFT IDs and associated URIs into the front-end dApp
    struct allTokens {
        uint256 id;
        string uri;
    }

    // change the parameters in the constructor to something more interesting
    // ERC721(name_of_token, ticker) referred to in the main contract template as _name and _symbol
    constructor () ERC721("Dev Bootcamp Project","DBP") {}


    /// @notice This function sets the URI for the NFT you wish to mint
    /// @dev This function calls on the _tokenURIs mapping defined above and assigns the specific input _tokenURI to the mapped tokenID
    /// @param tokenID The ID of the token with which to associate the input URI _tokenURI
    /// @param _tokenURI The input URI to be associated with the tokenID
    function _setTokenURI(uint256 tokenID, string memory _tokenURI) internal { // only to be used within the contract so setting scope to internal and prefixing with an underscore _setTokenURI()
        _tokenURIs[tokenID] = _tokenURI; // call the mapping _tokenURIs and set the _tokenURI for tokenID
    }


    /// @notice This function gets all of the minted tokens from the smart contract
    /// @dev This function is used to simplify displaying all of the minted NFTs from the contract in the front-end
    /// @return allTokens[] which is an array of all of the tokens minted to-date that can be stepped through in the front-end to display each of the NFTs
    function getAllTokens() public view returns(allTokens[] memory) {
        uint256 latestMintID = _tokenIDs.current(); // Get the ID of the most recently minted token
        uint256 counter = 0; // initiate the counter to 0
        allTokens[] memory resultArray = new allTokens[](latestMintID); // 
        for(uint256 i=0; i < latestMintID; i++) {
            if(_exists(counter)) {
                string memory uri = tokenURI(counter); // get the URI associated with the tokenID with number counter
                resultArray[counter] = allTokens(counter, uri); // add the result to the results array -> resultArray
            }
            counter++;
        }
        return resultArray;
    }


    /// @notice This function mints your NFT to your address
    /// @dev This function mints the NFT with the URI stored in the uri input variable
    /// @param recipient The ID of the token with which to associate the input URI _tokenURI
    /// @param uri The input URI to be associated with the tokenID
    /// @return newID The ID of the NFT that has just been minted
    function mint(address recipient, string memory uri) public payable returns(uint256) { // review whether this should be a public function or not.  Currently want this public to allow anyone to mint, but will need to review if I add a function to allow free mints for contract Owner (onlyOwner modifier or update to use full RBAC) versus other people
        require(!paused, "Minting is paused. The contract owner needs to unpause the contract.");
        if (msg.sender != owner()) {
            require(msg.value >= mintCost, "Insufficient funds for minting. Only the contract owner can mint free NFTs.");
        }
        
        uint256 newID = _tokenIDs.current(); // Get the current state of _tokenIDs to ensure minting the next available in the series
        _mint(recipient, newID); // calling the _mint() function from the ERC721 standard
        _setTokenURI(newID, uri); // this function calls the internal function to set the URI based on the input to THIS function (uri) and the NFT to be minted (newID)
        // check this next line is secure to increment here rather than earlier based on the points in the course around security
        _tokenIDs.increment(); // increase the value of tokenIDs at the end of the minting function so that the next mint uses the correct value when _tokenIDs.current() is called
        emit Minted(newID); // added an emit event to allow verification test - don't think this works!
        return newID;
    }


    /// @notice This function is a read-only function for looking up the URI associated with a specific tokenID
    /// @dev This function uses override to ensure no conflict with the underlying function tokenURI() from the ERC721 standard template from OpenZeppelin
    /// @param tokenID The ID of the token to be looked up for its matching URI
    /// @return _tokenURI The URI of the the token requested with ID matching tokenID
    // This function tokenURI() is to allow other applications to be able to view the URI and associated metadata for the tokenID that is input.
    // override is needed to ensure no conflict with the underlying tokenURI() from the ERC721 standard - can I adjust to getTokenURI() for improved readability or will that not adhere to the standard for 721 and not work on OpenSea etc?
    function tokenURI(uint256 tokenID) public view virtual override returns(string memory) { // this is to allo
        require(_exists(tokenID)); // ensure there is a break if someone calls this function for a tokenID that does not exist in the mapping
        string memory _tokenURI = _tokenURIs[tokenID]; // get the value of the URI for tokenID from the _tokenURIs mapping
        return _tokenURI;
    }


    /// @notice This function is to allow the contract owner to withdraw the funds received from the contract
    /// @dev No special notes. Uses the onlyOwner modifier from the OpenZeppelin templates
    // No fees implemented yet so this function will not have anything to withdraw from the contract
    function withdraw() public payable onlyOwner {
    require(payable(msg.sender).send(address(this).balance));
    }


    /// @notice This function pauses and unpauses the minting function
    /// @dev This function takes a single boolean variable to update the paused/unpaused state of minting
    /// @param _state The boolean value (true or false) to set the status of the minting function
    function pause(bool _state) public onlyOwner() {
        paused = _state;
    }


    /// @notice This function updates the mint cost for the NFTs
    /// @dev This function updates the mint cost for the NFTs
    /// @param _newMintCost The new mint cost in wei / Ether
    function setCost(uint256 _newMintCost) public onlyOwner() {
        mintCost = _newMintCost;
    }

}