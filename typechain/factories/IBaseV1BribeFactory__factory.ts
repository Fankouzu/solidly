/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IBaseV1BribeFactory,
  IBaseV1BribeFactoryInterface,
} from "../IBaseV1BribeFactory";

const _abi = [
  {
    inputs: [],
    name: "createBribe",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IBaseV1BribeFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IBaseV1BribeFactoryInterface {
    return new utils.Interface(_abi) as IBaseV1BribeFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBaseV1BribeFactory {
    return new Contract(address, _abi, signerOrProvider) as IBaseV1BribeFactory;
  }
}
