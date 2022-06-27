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

interface VeDistInterface extends ethers.utils.Interface {
  functions: {
    "checkpoint_token()": FunctionFragment;
    "checkpoint_total_supply()": FunctionFragment;
    "claim(uint256)": FunctionFragment;
    "claim_many(uint256[])": FunctionFragment;
    "claimable(uint256)": FunctionFragment;
    "depositor()": FunctionFragment;
    "last_token_time()": FunctionFragment;
    "setDepositor(address)": FunctionFragment;
    "start_time()": FunctionFragment;
    "time_cursor()": FunctionFragment;
    "time_cursor_of(uint256)": FunctionFragment;
    "timestamp()": FunctionFragment;
    "token()": FunctionFragment;
    "token_last_balance()": FunctionFragment;
    "tokens_per_week(uint256)": FunctionFragment;
    "user_epoch_of(uint256)": FunctionFragment;
    "ve_for_at(uint256,uint256)": FunctionFragment;
    "ve_supply(uint256)": FunctionFragment;
    "voting_escrow()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "checkpoint_token",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkpoint_total_supply",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "claim", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "claim_many",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimable",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "depositor", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "last_token_time",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setDepositor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "start_time",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "time_cursor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "time_cursor_of",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "timestamp", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "token_last_balance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokens_per_week",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "user_epoch_of",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ve_for_at",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ve_supply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "voting_escrow",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "checkpoint_token",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkpoint_total_supply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim_many", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "last_token_time",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDepositor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "start_time", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "time_cursor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "time_cursor_of",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "timestamp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "token_last_balance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokens_per_week",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "user_epoch_of",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ve_for_at", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ve_supply", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "voting_escrow",
    data: BytesLike
  ): Result;

  events: {
    "CheckpointToken(uint256,uint256)": EventFragment;
    "Claimed(uint256,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CheckpointToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
}

export type CheckpointTokenEvent = TypedEvent<
  [BigNumber, BigNumber] & { time: BigNumber; tokens: BigNumber }
>;

export type ClaimedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber] & {
    tokenId: BigNumber;
    amount: BigNumber;
    claim_epoch: BigNumber;
    max_epoch: BigNumber;
  }
>;

export class VeDist extends BaseContract {
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

  interface: VeDistInterface;

  functions: {
    checkpoint_token(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkpoint_total_supply(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claim(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claim_many(
      _tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimable(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    depositor(overrides?: CallOverrides): Promise<[string]>;

    last_token_time(overrides?: CallOverrides): Promise<[BigNumber]>;

    setDepositor(
      _depositor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    start_time(overrides?: CallOverrides): Promise<[BigNumber]>;

    time_cursor(overrides?: CallOverrides): Promise<[BigNumber]>;

    time_cursor_of(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    timestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    token_last_balance(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokens_per_week(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    user_epoch_of(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    ve_for_at(
      _tokenId: BigNumberish,
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    ve_supply(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    voting_escrow(overrides?: CallOverrides): Promise<[string]>;
  };

  checkpoint_token(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkpoint_total_supply(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claim(
    _tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claim_many(
    _tokenIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimable(
    _tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  depositor(overrides?: CallOverrides): Promise<string>;

  last_token_time(overrides?: CallOverrides): Promise<BigNumber>;

  setDepositor(
    _depositor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  start_time(overrides?: CallOverrides): Promise<BigNumber>;

  time_cursor(overrides?: CallOverrides): Promise<BigNumber>;

  time_cursor_of(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  timestamp(overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  token_last_balance(overrides?: CallOverrides): Promise<BigNumber>;

  tokens_per_week(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  user_epoch_of(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  ve_for_at(
    _tokenId: BigNumberish,
    _timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  ve_supply(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  voting_escrow(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    checkpoint_token(overrides?: CallOverrides): Promise<void>;

    checkpoint_total_supply(overrides?: CallOverrides): Promise<void>;

    claim(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim_many(
      _tokenIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    claimable(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositor(overrides?: CallOverrides): Promise<string>;

    last_token_time(overrides?: CallOverrides): Promise<BigNumber>;

    setDepositor(_depositor: string, overrides?: CallOverrides): Promise<void>;

    start_time(overrides?: CallOverrides): Promise<BigNumber>;

    time_cursor(overrides?: CallOverrides): Promise<BigNumber>;

    time_cursor_of(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    timestamp(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;

    token_last_balance(overrides?: CallOverrides): Promise<BigNumber>;

    tokens_per_week(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    user_epoch_of(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ve_for_at(
      _tokenId: BigNumberish,
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ve_supply(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    voting_escrow(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "CheckpointToken(uint256,uint256)"(
      time?: null,
      tokens?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { time: BigNumber; tokens: BigNumber }
    >;

    CheckpointToken(
      time?: null,
      tokens?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { time: BigNumber; tokens: BigNumber }
    >;

    "Claimed(uint256,uint256,uint256,uint256)"(
      tokenId?: null,
      amount?: null,
      claim_epoch?: null,
      max_epoch?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, BigNumber],
      {
        tokenId: BigNumber;
        amount: BigNumber;
        claim_epoch: BigNumber;
        max_epoch: BigNumber;
      }
    >;

    Claimed(
      tokenId?: null,
      amount?: null,
      claim_epoch?: null,
      max_epoch?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, BigNumber],
      {
        tokenId: BigNumber;
        amount: BigNumber;
        claim_epoch: BigNumber;
        max_epoch: BigNumber;
      }
    >;
  };

  estimateGas: {
    checkpoint_token(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkpoint_total_supply(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claim(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claim_many(
      _tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimable(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositor(overrides?: CallOverrides): Promise<BigNumber>;

    last_token_time(overrides?: CallOverrides): Promise<BigNumber>;

    setDepositor(
      _depositor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    start_time(overrides?: CallOverrides): Promise<BigNumber>;

    time_cursor(overrides?: CallOverrides): Promise<BigNumber>;

    time_cursor_of(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    timestamp(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    token_last_balance(overrides?: CallOverrides): Promise<BigNumber>;

    tokens_per_week(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    user_epoch_of(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ve_for_at(
      _tokenId: BigNumberish,
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ve_supply(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    voting_escrow(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    checkpoint_token(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkpoint_total_supply(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claim(
      _tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claim_many(
      _tokenIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimable(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    last_token_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setDepositor(
      _depositor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    start_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    time_cursor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    time_cursor_of(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    timestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token_last_balance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokens_per_week(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    user_epoch_of(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ve_for_at(
      _tokenId: BigNumberish,
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ve_supply(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    voting_escrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
