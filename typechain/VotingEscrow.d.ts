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

interface VotingEscrowInterface extends ethers.utils.Interface {
  functions: {
    "checkpoint()": FunctionFragment;
    "deposit_for(uint256,uint256)": FunctionFragment;
    "epoch()": FunctionFragment;
    "point_history(uint256)": FunctionFragment;
    "token()": FunctionFragment;
    "user_point_epoch(uint256)": FunctionFragment;
    "user_point_history(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "checkpoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit_for",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "epoch", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "point_history",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "user_point_epoch",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "user_point_history",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "checkpoint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deposit_for",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "epoch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "point_history",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "user_point_epoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "user_point_history",
    data: BytesLike
  ): Result;

  events: {};
}

export class VotingEscrow extends BaseContract {
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

  interface: VotingEscrowInterface;

  functions: {
    checkpoint(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit_for(
      tokenId: BigNumberish,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    epoch(overrides?: CallOverrides): Promise<[BigNumber]>;

    point_history(
      loc: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber, BigNumber, BigNumber] & {
          bias: BigNumber;
          slope: BigNumber;
          ts: BigNumber;
          blk: BigNumber;
        }
      ]
    >;

    token(overrides?: CallOverrides): Promise<[string]>;

    user_point_epoch(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    user_point_history(
      tokenId: BigNumberish,
      loc: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber, BigNumber, BigNumber] & {
          bias: BigNumber;
          slope: BigNumber;
          ts: BigNumber;
          blk: BigNumber;
        }
      ]
    >;
  };

  checkpoint(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit_for(
    tokenId: BigNumberish,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  epoch(overrides?: CallOverrides): Promise<BigNumber>;

  point_history(
    loc: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      bias: BigNumber;
      slope: BigNumber;
      ts: BigNumber;
      blk: BigNumber;
    }
  >;

  token(overrides?: CallOverrides): Promise<string>;

  user_point_epoch(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  user_point_history(
    tokenId: BigNumberish,
    loc: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      bias: BigNumber;
      slope: BigNumber;
      ts: BigNumber;
      blk: BigNumber;
    }
  >;

  callStatic: {
    checkpoint(overrides?: CallOverrides): Promise<void>;

    deposit_for(
      tokenId: BigNumberish,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    epoch(overrides?: CallOverrides): Promise<BigNumber>;

    point_history(
      loc: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        bias: BigNumber;
        slope: BigNumber;
        ts: BigNumber;
        blk: BigNumber;
      }
    >;

    token(overrides?: CallOverrides): Promise<string>;

    user_point_epoch(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    user_point_history(
      tokenId: BigNumberish,
      loc: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        bias: BigNumber;
        slope: BigNumber;
        ts: BigNumber;
        blk: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    checkpoint(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit_for(
      tokenId: BigNumberish,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    epoch(overrides?: CallOverrides): Promise<BigNumber>;

    point_history(
      loc: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    user_point_epoch(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    user_point_history(
      tokenId: BigNumberish,
      loc: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkpoint(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit_for(
      tokenId: BigNumberish,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    epoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    point_history(
      loc: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    user_point_epoch(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    user_point_history(
      tokenId: BigNumberish,
      loc: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
