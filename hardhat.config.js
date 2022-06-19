require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  // solidity: "0.8.10",
  solidity: {
    version: "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    mumbai: {
      url: process.env.TEST_ALCHEMY_KEY,
      accounts: [process.env.TEST_PRIVATE_KEY],
    },
    matic: {
      url: process.env.MAIN_ALCHEMY_KEY,
      accounts: [process.env.MAIN_PRIVATE_KEY],
      gas: 21000000000,
      gasPrice: 10000000000000,
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY,
  },
};
