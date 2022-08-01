import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import { deployContract } from "./scripts/deployTool";
import {
  BaseV1Factory,
  BaseV1Router01,
  BaseV1,
  Ve,
  VeDist,
  BaseV1GaugeFactory,
  BaseV1BribeFactory,
  BaseV1Voter,
  BaseV2Minter
} from "./typechain";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address,
      (await hre.ethers.provider.getBalance(account.address)).toString());
  }
});


task("deploy", "deploy contract")
  .addParam("wtoken", "wrapped token")
  .setAction(
    async ({ wtoken }, { ethers, run, network }) => {
      await run("compile");
      const [wallet1, wallet2, wallet3, deployer] = await ethers.getSigners();

      const factory = await deployContract(
        "BaseV1Factory",
        network.name,
        ethers.getContractFactory,
        deployer,
        []
      ) as BaseV1Factory;

      const router = await deployContract(
        "BaseV1Router01",
        network.name,
        ethers.getContractFactory,
        deployer,
        [factory.address, wtoken]
      ) as BaseV1Router01;

      const token = await deployContract(
        "BaseV1",
        network.name,
        ethers.getContractFactory,
        deployer,
        []
      ) as BaseV1;

      const ve = await deployContract(
        "contracts/ve.sol:ve",
        network.name,
        ethers.getContractFactory,
        deployer,
        [token.address]
      ) as Ve;

      const ve_dist = await deployContract(
        "contracts/ve_dist.sol:ve_dist",
        network.name,
        ethers.getContractFactory,
        deployer,
        [ve.address]
      ) as VeDist;

      const gaugeFactory = await deployContract(
        "BaseV1GaugeFactory",
        network.name,
        ethers.getContractFactory,
        deployer,
        []
      ) as BaseV1GaugeFactory;

      const bribeFactory = await deployContract(
        "BaseV1BribeFactory",
        network.name,
        ethers.getContractFactory,
        deployer,
        []
      ) as BaseV1BribeFactory;

      const voter = await deployContract(
        "BaseV1Voter",
        network.name,
        ethers.getContractFactory,
        deployer,
        [ve.address, factory.address, gaugeFactory.address, bribeFactory.address]
      ) as BaseV1Voter;

      const minter = await deployContract(
        "BaseV2Minter",
        network.name,
        ethers.getContractFactory,
        deployer,
        [voter.address, ve.address, ve_dist.address]
      ) as BaseV2Minter;

    }
  );

task("deploy-token", "deploy contract")
  .addParam("factory", "factory address")
  .setAction(
    async ({ factory }, { ethers, run, network }) => {
      await run("compile");
      const [wallet1, wallet2, wallet3, deployer] = await ethers.getSigners();

      const token = await deployContract(
        "BaseV1",
        network.name,
        ethers.getContractFactory,
        deployer,
        []
      ) as BaseV1;

      const ve = await deployContract(
        "contracts/ve.sol:ve",
        network.name,
        ethers.getContractFactory,
        deployer,
        [token.address]
      ) as Ve;

      const ve_dist = await deployContract(
        "contracts/ve_dist.sol:ve_dist",
        network.name,
        ethers.getContractFactory,
        deployer,
        [ve.address]
      ) as VeDist;

      const gaugeFactory = await deployContract(
        "BaseV1GaugeFactory",
        network.name,
        ethers.getContractFactory,
        deployer,
        []
      ) as BaseV1GaugeFactory;

      const bribeFactory = await deployContract(
        "BaseV1BribeFactory",
        network.name,
        ethers.getContractFactory,
        deployer,
        []
      ) as BaseV1BribeFactory;

      const voter = await deployContract(
        "BaseV1Voter",
        network.name,
        ethers.getContractFactory,
        deployer,
        [ve.address, factory, gaugeFactory.address, bribeFactory.address]
      ) as BaseV1Voter;

      const minter = await deployContract(
        "BaseV2Minter",
        network.name,
        ethers.getContractFactory,
        deployer,
        [voter.address, ve.address, ve_dist.address]
      ) as BaseV2Minter;

    }
  );


task("deploy-router", "deploy contract")
  .addParam("factory", "factory address")
  .addParam("wtoken", "wrapped token")
  .setAction(
    async ({ factory, wtoken }, { ethers, run, network }) => {
      await run("compile");
      const [wallet1, wallet2, wallet3, deployer] = await ethers.getSigners();

      const router = await deployContract(
        "BaseV1Router01",
        network.name,
        ethers.getContractFactory,
        deployer,
        [factory, wtoken]
      ) as BaseV1Router01;

    }
  );


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      outputSelection: {
        "*": {
          "*": [
            "abi",
            "evm.bytecode",
            "evm.deployedBytecode",
            "evm.methodIdentifiers",
            "metadata",
            "storageLayout"
          ],
          "": [
            "ast"
          ]
        }
      }
    },
  },
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL || "",
      accounts: {
        mnemonic: process.env.MNEMONIC
      }
    },
    metertest: {
      url: `https://rpctest.meter.io`,
      chainId: 83,
      gasPrice: 500000000000,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
    metermain: {
      url: `https://rpc.meter.io`,
      chainId: 82,
      gasPrice: 500000000000,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
