/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { VotingEscrow, VotingEscrowInterface } from "../VotingEscrow";

const _abi = [
  {
    inputs: [],
    name: "checkpoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "deposit_for",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "epoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "loc",
        type: "uint256",
      },
    ],
    name: "point_history",
    outputs: [
      {
        components: [
          {
            internalType: "int128",
            name: "bias",
            type: "int128",
          },
          {
            internalType: "int128",
            name: "slope",
            type: "int128",
          },
          {
            internalType: "uint256",
            name: "ts",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blk",
            type: "uint256",
          },
        ],
        internalType: "struct VotingEscrow.Point",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "user_point_epoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "loc",
        type: "uint256",
      },
    ],
    name: "user_point_history",
    outputs: [
      {
        components: [
          {
            internalType: "int128",
            name: "bias",
            type: "int128",
          },
          {
            internalType: "int128",
            name: "slope",
            type: "int128",
          },
          {
            internalType: "uint256",
            name: "ts",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blk",
            type: "uint256",
          },
        ],
        internalType: "struct VotingEscrow.Point",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class VotingEscrow__factory {
  static readonly abi = _abi;
  static createInterface(): VotingEscrowInterface {
    return new utils.Interface(_abi) as VotingEscrowInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VotingEscrow {
    return new Contract(address, _abi, signerOrProvider) as VotingEscrow;
  }
}
