require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  settings: { optimizer: { enabled: true, runs: 200 } },
  networks: {
    goerli: {
      url: process.env.QUICKNODE_API_KEY_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHER_API_KEY
  }
};

// Contract deployed to: 0x76fF23D27Bb8f578981244bACC06524188c5a687
// Minted NFT #1
// Minted NFT #2
