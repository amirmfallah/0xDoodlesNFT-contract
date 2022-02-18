const HDWalletProvider = require('@truffle/hdwallet-provider');
const web3 = require("web3");
const fs = require('fs');
const path = require("path");
require('dotenv').config()

const MNEMONIC = process.env.MNEMONIC
const API_KEY = process.env.NODE_KEY

const NFT_CONTRACT_ADDRESS = "0xC788fdc2b9EB8E1b940D6441EefDae31De0Bd1a1"
const OWNER_ADDRESS = "0x18090cfACB9879B0d631eA6bF826D32A28d381EC";
const MUMBAI = `https://rpc-mumbai.maticvigil.com/v1/${API_KEY}`
const MATIC = `https://rpc-mainnet.maticvigil.com/v1/${API_KEY}`
const NUM_ITEMS = 5;


let rawdata = fs.readFileSync(path.resolve(__dirname, "../build/contracts/DoodlesNFTV3.json"));
let contractAbi = JSON.parse(rawdata);
const NFT_ABI = contractAbi.abi

async function test() {

      try {
            const provider = new HDWalletProvider(
                  MNEMONIC, MUMBAI
            );
            const web3Instance = new web3(provider);


            const nftContract = new web3Instance.eth.Contract(
                  NFT_ABI,
                  NFT_CONTRACT_ADDRESS,
            );

            //? Edit: Check the uri of token 1.

                  await nftContract.methods
                        .tokenURI(4).call().then((receipt) => {
                              console.log(receipt)
                        }).catch(err => console.log(err))

      }

      catch (e) {
            console.log(e)
      }
}


test().then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});