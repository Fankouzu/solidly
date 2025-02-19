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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface BaseV1Router01Interface extends ethers.utils.Interface {
  functions: {
    "UNSAFE_swapExactTokensForTokens(uint256[],tuple[],address,uint256)": FunctionFragment;
    "addLiquidity(address,address,bool,uint256,uint256,uint256,uint256,address,uint256)": FunctionFragment;
    "addLiquidityETH(address,bool,uint256,uint256,uint256,address,uint256)": FunctionFragment;
    "factory()": FunctionFragment;
    "getAmountOut(uint256,address,address)": FunctionFragment;
    "getAmountsOut(uint256,tuple[])": FunctionFragment;
    "getReserves(address,address,bool)": FunctionFragment;
    "isPair(address)": FunctionFragment;
    "pairFor(address,address,bool)": FunctionFragment;
    "quoteAddLiquidity(address,address,bool,uint256,uint256)": FunctionFragment;
    "quoteRemoveLiquidity(address,address,bool,uint256)": FunctionFragment;
    "removeLiquidity(address,address,bool,uint256,uint256,uint256,address,uint256)": FunctionFragment;
    "removeLiquidityETH(address,bool,uint256,uint256,uint256,address,uint256)": FunctionFragment;
    "removeLiquidityETHWithPermit(address,bool,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)": FunctionFragment;
    "removeLiquidityWithPermit(address,address,bool,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)": FunctionFragment;
    "sortTokens(address,address)": FunctionFragment;
    "swapExactETHForTokens(uint256,tuple[],address,uint256)": FunctionFragment;
    "swapExactTokensForETH(uint256,uint256,tuple[],address,uint256)": FunctionFragment;
    "swapExactTokensForTokens(uint256,uint256,tuple[],address,uint256)": FunctionFragment;
    "swapExactTokensForTokensSimple(uint256,uint256,address,address,bool,address,uint256)": FunctionFragment;
    "weth()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "UNSAFE_swapExactTokensForTokens",
    values: [
      BigNumberish[],
      { from: string; to: string; stable: boolean }[],
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [
      string,
      string,
      boolean,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidityETH",
    values: [
      string,
      boolean,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAmountOut",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountsOut",
    values: [BigNumberish, { from: string; to: string; stable: boolean }[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserves",
    values: [string, string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "isPair", values: [string]): string;
  encodeFunctionData(
    functionFragment: "pairFor",
    values: [string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteAddLiquidity",
    values: [string, string, boolean, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteRemoveLiquidity",
    values: [string, string, boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [
      string,
      string,
      boolean,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityETH",
    values: [
      string,
      boolean,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityETHWithPermit",
    values: [
      string,
      boolean,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      boolean,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityWithPermit",
    values: [
      string,
      string,
      boolean,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      boolean,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sortTokens",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactETHForTokens",
    values: [
      BigNumberish,
      { from: string; to: string; stable: boolean }[],
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForETH",
    values: [
      BigNumberish,
      BigNumberish,
      { from: string; to: string; stable: boolean }[],
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForTokens",
    values: [
      BigNumberish,
      BigNumberish,
      { from: string; to: string; stable: boolean }[],
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForTokensSimple",
    values: [
      BigNumberish,
      BigNumberish,
      string,
      string,
      boolean,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "UNSAFE_swapExactTokensForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidityETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAmountOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountsOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isPair", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pairFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "quoteAddLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteRemoveLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityETHWithPermit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityWithPermit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sortTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapExactETHForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForTokensSimple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;

  events: {};
}

export class BaseV1Router01 extends BaseContract {
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

  interface: BaseV1Router01Interface;

  functions: {
    UNSAFE_swapExactTokensForTokens(
      amounts: BigNumberish[],
      routes: { from: string; to: string; stable: boolean }[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addLiquidity(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addLiquidityETH(
      token: string,
      stable: boolean,
      amountTokenDesired: BigNumberish,
      amountTokenMin: BigNumberish,
      amountETHMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    getAmountOut(
      amountIn: BigNumberish,
      tokenIn: string,
      tokenOut: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean] & { amount: BigNumber; stable: boolean }>;

    getAmountsOut(
      amountIn: BigNumberish,
      routes: { from: string; to: string; stable: boolean }[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { amounts: BigNumber[] }>;

    getReserves(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { reserveA: BigNumber; reserveB: BigNumber }
    >;

    isPair(pair: string, overrides?: CallOverrides): Promise<[boolean]>;

    pairFor(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      overrides?: CallOverrides
    ): Promise<[string] & { pair: string }>;

    quoteAddLiquidity(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amountA: BigNumber;
        amountB: BigNumber;
        liquidity: BigNumber;
      }
    >;

    quoteRemoveLiquidity(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountA: BigNumber; amountB: BigNumber }
    >;

    removeLiquidity(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeLiquidityETH(
      token: string,
      stable: boolean,
      liquidity: BigNumberish,
      amountTokenMin: BigNumberish,
      amountETHMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeLiquidityETHWithPermit(
      token: string,
      stable: boolean,
      liquidity: BigNumberish,
      amountTokenMin: BigNumberish,
      amountETHMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      approveMax: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeLiquidityWithPermit(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      approveMax: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sortTokens(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { token0: string; token1: string }>;

    swapExactETHForTokens(
      amountOutMin: BigNumberish,
      routes: { from: string; to: string; stable: boolean }[],
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExactTokensForETH(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      routes: { from: string; to: string; stable: boolean }[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      routes: { from: string; to: string; stable: boolean }[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExactTokensForTokensSimple(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tokenFrom: string,
      tokenTo: string,
      stable: boolean,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    weth(overrides?: CallOverrides): Promise<[string]>;
  };

  UNSAFE_swapExactTokensForTokens(
    amounts: BigNumberish[],
    routes: { from: string; to: string; stable: boolean }[],
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addLiquidity(
    tokenA: string,
    tokenB: string,
    stable: boolean,
    amountADesired: BigNumberish,
    amountBDesired: BigNumberish,
    amountAMin: BigNumberish,
    amountBMin: BigNumberish,
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addLiquidityETH(
    token: string,
    stable: boolean,
    amountTokenDesired: BigNumberish,
    amountTokenMin: BigNumberish,
    amountETHMin: BigNumberish,
    to: string,
    deadline: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  factory(overrides?: CallOverrides): Promise<string>;

  getAmountOut(
    amountIn: BigNumberish,
    tokenIn: string,
    tokenOut: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, boolean] & { amount: BigNumber; stable: boolean }>;

  getAmountsOut(
    amountIn: BigNumberish,
    routes: { from: string; to: string; stable: boolean }[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getReserves(
    tokenA: string,
    tokenB: string,
    stable: boolean,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { reserveA: BigNumber; reserveB: BigNumber }
  >;

  isPair(pair: string, overrides?: CallOverrides): Promise<boolean>;

  pairFor(
    tokenA: string,
    tokenB: string,
    stable: boolean,
    overrides?: CallOverrides
  ): Promise<string>;

  quoteAddLiquidity(
    tokenA: string,
    tokenB: string,
    stable: boolean,
    amountADesired: BigNumberish,
    amountBDesired: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      amountA: BigNumber;
      amountB: BigNumber;
      liquidity: BigNumber;
    }
  >;

  quoteRemoveLiquidity(
    tokenA: string,
    tokenB: string,
    stable: boolean,
    liquidity: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amountA: BigNumber; amountB: BigNumber }
  >;

  removeLiquidity(
    tokenA: string,
    tokenB: string,
    stable: boolean,
    liquidity: BigNumberish,
    amountAMin: BigNumberish,
    amountBMin: BigNumberish,
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeLiquidityETH(
    token: string,
    stable: boolean,
    liquidity: BigNumberish,
    amountTokenMin: BigNumberish,
    amountETHMin: BigNumberish,
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeLiquidityETHWithPermit(
    token: string,
    stable: boolean,
    liquidity: BigNumberish,
    amountTokenMin: BigNumberish,
    amountETHMin: BigNumberish,
    to: string,
    deadline: BigNumberish,
    approveMax: boolean,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeLiquidityWithPermit(
    tokenA: string,
    tokenB: string,
    stable: boolean,
    liquidity: BigNumberish,
    amountAMin: BigNumberish,
    amountBMin: BigNumberish,
    to: string,
    deadline: BigNumberish,
    approveMax: boolean,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sortTokens(
    tokenA: string,
    tokenB: string,
    overrides?: CallOverrides
  ): Promise<[string, string] & { token0: string; token1: string }>;

  swapExactETHForTokens(
    amountOutMin: BigNumberish,
    routes: { from: string; to: string; stable: boolean }[],
    to: string,
    deadline: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExactTokensForETH(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    routes: { from: string; to: string; stable: boolean }[],
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExactTokensForTokens(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    routes: { from: string; to: string; stable: boolean }[],
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExactTokensForTokensSimple(
    amountIn: BigNumberish,
    amountOutMin: BigNumberish,
    tokenFrom: string,
    tokenTo: string,
    stable: boolean,
    to: string,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  weth(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    UNSAFE_swapExactTokensForTokens(
      amounts: BigNumberish[],
      routes: { from: string; to: string; stable: boolean }[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    addLiquidity(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amountA: BigNumber;
        amountB: BigNumber;
        liquidity: BigNumber;
      }
    >;

    addLiquidityETH(
      token: string,
      stable: boolean,
      amountTokenDesired: BigNumberish,
      amountTokenMin: BigNumberish,
      amountETHMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amountToken: BigNumber;
        amountETH: BigNumber;
        liquidity: BigNumber;
      }
    >;

    factory(overrides?: CallOverrides): Promise<string>;

    getAmountOut(
      amountIn: BigNumberish,
      tokenIn: string,
      tokenOut: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean] & { amount: BigNumber; stable: boolean }>;

    getAmountsOut(
      amountIn: BigNumberish,
      routes: { from: string; to: string; stable: boolean }[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getReserves(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { reserveA: BigNumber; reserveB: BigNumber }
    >;

    isPair(pair: string, overrides?: CallOverrides): Promise<boolean>;

    pairFor(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      overrides?: CallOverrides
    ): Promise<string>;

    quoteAddLiquidity(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        amountA: BigNumber;
        amountB: BigNumber;
        liquidity: BigNumber;
      }
    >;

    quoteRemoveLiquidity(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountA: BigNumber; amountB: BigNumber }
    >;

    removeLiquidity(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountA: BigNumber; amountB: BigNumber }
    >;

    removeLiquidityETH(
      token: string,
      stable: boolean,
      liquidity: BigNumberish,
      amountTokenMin: BigNumberish,
      amountETHMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountToken: BigNumber; amountETH: BigNumber }
    >;

    removeLiquidityETHWithPermit(
      token: string,
      stable: boolean,
      liquidity: BigNumberish,
      amountTokenMin: BigNumberish,
      amountETHMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      approveMax: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountToken: BigNumber; amountETH: BigNumber }
    >;

    removeLiquidityWithPermit(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      approveMax: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountA: BigNumber; amountB: BigNumber }
    >;

    sortTokens(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<[string, string] & { token0: string; token1: string }>;

    swapExactETHForTokens(
      amountOutMin: BigNumberish,
      routes: { from: string; to: string; stable: boolean }[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    swapExactTokensForETH(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      routes: { from: string; to: string; stable: boolean }[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      routes: { from: string; to: string; stable: boolean }[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    swapExactTokensForTokensSimple(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tokenFrom: string,
      tokenTo: string,
      stable: boolean,
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    weth(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    UNSAFE_swapExactTokensForTokens(
      amounts: BigNumberish[],
      routes: { from: string; to: string; stable: boolean }[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addLiquidity(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addLiquidityETH(
      token: string,
      stable: boolean,
      amountTokenDesired: BigNumberish,
      amountTokenMin: BigNumberish,
      amountETHMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    getAmountOut(
      amountIn: BigNumberish,
      tokenIn: string,
      tokenOut: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmountsOut(
      amountIn: BigNumberish,
      routes: { from: string; to: string; stable: boolean }[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserves(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPair(pair: string, overrides?: CallOverrides): Promise<BigNumber>;

    pairFor(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quoteAddLiquidity(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quoteRemoveLiquidity(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLiquidity(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeLiquidityETH(
      token: string,
      stable: boolean,
      liquidity: BigNumberish,
      amountTokenMin: BigNumberish,
      amountETHMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeLiquidityETHWithPermit(
      token: string,
      stable: boolean,
      liquidity: BigNumberish,
      amountTokenMin: BigNumberish,
      amountETHMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      approveMax: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeLiquidityWithPermit(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      approveMax: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sortTokens(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapExactETHForTokens(
      amountOutMin: BigNumberish,
      routes: { from: string; to: string; stable: boolean }[],
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExactTokensForETH(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      routes: { from: string; to: string; stable: boolean }[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      routes: { from: string; to: string; stable: boolean }[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExactTokensForTokensSimple(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tokenFrom: string,
      tokenTo: string,
      stable: boolean,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    UNSAFE_swapExactTokensForTokens(
      amounts: BigNumberish[],
      routes: { from: string; to: string; stable: boolean }[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addLiquidity(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addLiquidityETH(
      token: string,
      stable: boolean,
      amountTokenDesired: BigNumberish,
      amountTokenMin: BigNumberish,
      amountETHMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAmountOut(
      amountIn: BigNumberish,
      tokenIn: string,
      tokenOut: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAmountsOut(
      amountIn: BigNumberish,
      routes: { from: string; to: string; stable: boolean }[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserves(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPair(
      pair: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pairFor(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    quoteAddLiquidity(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      amountADesired: BigNumberish,
      amountBDesired: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    quoteRemoveLiquidity(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      liquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeLiquidity(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidityETH(
      token: string,
      stable: boolean,
      liquidity: BigNumberish,
      amountTokenMin: BigNumberish,
      amountETHMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidityETHWithPermit(
      token: string,
      stable: boolean,
      liquidity: BigNumberish,
      amountTokenMin: BigNumberish,
      amountETHMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      approveMax: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidityWithPermit(
      tokenA: string,
      tokenB: string,
      stable: boolean,
      liquidity: BigNumberish,
      amountAMin: BigNumberish,
      amountBMin: BigNumberish,
      to: string,
      deadline: BigNumberish,
      approveMax: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sortTokens(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swapExactETHForTokens(
      amountOutMin: BigNumberish,
      routes: { from: string; to: string; stable: boolean }[],
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExactTokensForETH(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      routes: { from: string; to: string; stable: boolean }[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExactTokensForTokens(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      routes: { from: string; to: string; stable: boolean }[],
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExactTokensForTokensSimple(
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      tokenFrom: string,
      tokenTo: string,
      stable: boolean,
      to: string,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
