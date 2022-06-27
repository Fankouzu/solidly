/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface VoterTestInterface extends ethers.utils.Interface {
  functions: {
    "attachTokenToGauge(uint256,address)": FunctionFragment;
    "detachTokenFromGauge(uint256,address)": FunctionFragment;
    "distribute(address)": FunctionFragment;
    "emitDeposit(uint256,address,uint256)": FunctionFragment;
    "emitWithdraw(uint256,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "attachTokenToGauge",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "detachTokenFromGauge",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "distribute", values: [string]): string;
  encodeFunctionData(
    functionFragment: "emitDeposit",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emitWithdraw",
    values: [BigNumberish, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "attachTokenToGauge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "detachTokenFromGauge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emitDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emitWithdraw",
    data: BytesLike
  ): Result;

  events: {};
}

export class VoterTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: VoterTestInterface;

  functions: {
    attachTokenToGauge(
      tokenId: BigNumberish,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    detachTokenFromGauge(
      tokenId: BigNumberish,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distribute(
      _gauge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emitDeposit(
      tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emitWithdraw(
      tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  attachTokenToGauge(
    tokenId: BigNumberish,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  detachTokenFromGauge(
    tokenId: BigNumberish,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distribute(
    _gauge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emitDeposit(
    tokenId: BigNumberish,
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emitWithdraw(
    tokenId: BigNumberish,
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    attachTokenToGauge(
      tokenId: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    detachTokenFromGauge(
      tokenId: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    distribute(_gauge: string, overrides?: CallOverrides): Promise<void>;

    emitDeposit(
      tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    emitWithdraw(
      tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    attachTokenToGauge(
      tokenId: BigNumberish,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    detachTokenFromGauge(
      tokenId: BigNumberish,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distribute(
      _gauge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emitDeposit(
      tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emitWithdraw(
      tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    attachTokenToGauge(
      tokenId: BigNumberish,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    detachTokenFromGauge(
      tokenId: BigNumberish,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distribute(
      _gauge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emitDeposit(
      tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emitWithdraw(
      tokenId: BigNumberish,
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
