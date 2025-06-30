# umi-hardhat-sol

Hardat environment to deploy Solidity smart contracts to Umi Network.

## Get Devnet Token

- To get tokens from faucet, go to https://faucet.uminetwork.com/.

- Connect your twitter account.

- Register your account address.

- Bridge your devnet tokens to UMI Devnet.

## Add Private Key to .env

**This is for development purposes only! Do not hardcode your actuall private key to anywhere!**

- To create a .env file:

`touch .env`

- To add your development private key to .env file, add following to your .env file and replace `dev-private-key` with your development private key:

`PRIVATE_KEY= "dev-private-key"`

## Install Dependencies

- To install node_modules, on the top of directory:

`npm install`

- To verify dependecy installation:

`npx hardhat compile`

## Deploy Contracts

- To get the bytecode, run the following command at the top of directory:

`npx hardhat run scripts/deploy.js`

- Copy the printed code and replace the value corresponding to `"bytecode"` key in `artifacts/contracts/Counter.sol/Counter.json`

- To deploy the contract, run the following command at the top of directory:

`npx hardhat run scripts/deploy.js`
