
// Ganache instance of contract
const contractAddress = "0x177f374f1e271214b306FDEc707B71d7cEF16F8A"

// Ganache-deployed contract ABI
const contractABI = [
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
		"stateMutability": "nonpayable",
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

// Validate app is loading
console.log("Page loaded as expected.")

// 1. Detect whether MetaMask is or is not installed
window.addEventListener('load', function() {
    if (typeof window.ethereum !== 'undefined') {
        let mmDetected = document.getElementById('mm-detected')
        mmDetected.innerHTML = "MetaMask has been detected!"
    }

    else {
        console.log('No wallet available!')
        this.alert("You need to install MetaMask or another wallet")
    }

    // 2. Allow the user to get access to MetaMask / Connect to MetaMask
    const mmEnable = document.getElementById('mm-connect');

    // mmEnable.onclick = () => {
    //     console.log("boop beep")
    // }

    mmEnable.onclick = async () => {
        await ethereum.request({ method: 'eth_requestAccounts'})

        const mmCurrentAccount = document.getElementById('mm-current-account');
        mmCurrentAccount.innerHTML = "Here's your current account: " + ethereum.selectedAddress
		
		const contractName = await smartContractInstance.methods.contractName().call()
		const scDisplayName = document.getElementById("sc-name")
		scDisplayName.innerHTML = "Smart Contract Name: " + contractName;

    }

})

var web3 = new Web3(window.ethereum)
const smartContractInstance = new web3.eth.Contract(contractABI, contractAddress) // added
smartContractInstance.setProvider(window.ethereum) // added

const ssSubmit = document.getElementById('ss-input-button');

ssSubmit.onclick = async () => {
    const ssValue = document.getElementById('ss-input-box').value;
    console.log(ssValue)

    // var web3 = new Web3(window.ethereum)

    const smartContractInstance = new web3.eth.Contract(contractABI, contractAddress)

    smartContractInstance.setProvider(window.ethereum)

    await smartContractInstance.methods.mint(ethereum.selectedAddress, ssValue).send({from: ethereum.selectedAddress})
    // await smartContract.mint(accounts[0], uri);
}

const ssRetrieve = document.getElementById('ss-retrieve-button');

// ssRetrieve.onclick = async () => {
//     const bcStoredData = document.getElementById('bc-stored-data');
    
//     const smartContractInstance = new web3.eth.Contract(contractABI, contractAddress)

//     smartContractInstance.setProvider(window.ethereum)

//     let tempVar = smartContractInstance.methods.retrieve().call();
//     bcStoredData.innerHTML = "Current stored value: " + tempVar[1];
//     smartContractInstance.methods.retrieve().call().then(console.log);
//     // await smartContractInstance.methods.store(ssValue).send({from: ethereum.selectedAddress})
    
// }


// window.addEventListener('load', function() {
//     const bcStoredData = document.getElementById('bc-stored-data');
//     const smartContractInstance = new web3.eth.Contract(contractABI, contractAddress);
    
//     bcStoredData.innerHTML = smartContractInstance.methods.retrieve().call();
//     smartContractInstance.methods.retrieve().call().then(console.log);

//     let bcStoredDataF2 = document.getElementById('bc-stored-data-f2');
//     bcStoredDataF2.innerHTML = "Current stored value: " + smartContractInstance.methods.retrieve().call();

//     })


// NEW CODE STARTS HERE

const ssGetValue = document.getElementById('ss-get-value')

ssGetValue.onclick = async () => {
    console.log("Button has been clicked")
    let tokens = await smartContractInstance.methods.getAllTokens().call()
    console.log(tokens)

    const ssDisplayValue = document.getElementById("ss-display-value")
	    ssDisplayValue.innerHTML = "Minted NFTs: "
	tokens.forEach(element => {
		ssDisplayValue.innerHTML += "<div>" + element.id + "&nbsp;" + element.uri +"</div>"
	});
    
}



// NEW CODE ENDS HERE





// I don't know why the below works
// Modified some code from: https://medium.com/coinmonks/a-really-simple-smart-contract-on-how-to-insert-value-into-the-ethereum-blockchain-and-display-it-62c455610e98
// ssRetrieve.onclick = // location.reload();
// // getValue();

// //function to retrieve the last inserted value on the blockchain
// function getValue() {
//     try {
//     //instantiate and connect to contract address via Abi
//     // var myAbi = web3.eth.contract(contractABI);
//     // var myfunction = myAbi.at(contractAddress);

//     const bcStoredData = document.getElementById('bc-stored-data');
//     const smartContractInstance = new web3.eth.Contract(contractABI, contractAddress)
    
//     //     smartContractInstance.setProvider(window.ethereum)
    
//     //     let tempVar = smartContractInstance.methods.retrieve().call();
//     //     bcStoredData.innerHTML = "Current stored value: " + tempVar[1];
//     //     smartContractInstance.methods.retrieve().call().then(console.log);



//     //call the get function of our smartContractInstance contract
//     smartContractInstance.methods.retrieve().call(function (err, value) {
//     if (err) { console.log(err) }
//     if (value) {
//     //display value on the webpage
//     document.getElementById("bc-stored-data").innerHTML = "Current stored value: " + value;
//     }
//     });
//     }
//     catch (err) {
//     document.getElementById("bc-stored-data").innerHTML = err;
//     }
//     }


// const ssGetValue = document.getElementById('ss-get-value')

// ssGetValue.onclick = async () => {
//     console.log("Button has been clicked")
//     var value = await smartContractInstance.methods.retrieve().call()
//     console.log("This is the stored value: " + value)

//     const ssDisplayValue = document.getElementById("ss-display-value")
//     ssDisplayValue.innerHTML = "Current Simple Storage Value: " + value
    
// }