import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ContractFactory } from "ethers";
import { ethers } from "hardhat";
import {
  Token,
  Ve,
  BaseV1GaugeFactory,
  BaseV1Voter,
  StakingRewards,
  Gauge,
  BaseV1
} from "../typechain";

describe("staking", function () {

  let token: ContractFactory;
  let reward2: Token;
  let stake: Token;
  let ve_underlying: BaseV1;
  let ve: Ve;
  let gauges_factory: BaseV1GaugeFactory;
  let gauge: Gauge;
  let staking: StakingRewards;
  let owner: SignerWithAddress;
  let owner2: SignerWithAddress;
  let owner3: SignerWithAddress;
  let voter: BaseV1Voter;

  it("deploy base coins", async function () {
    [owner, owner2, owner3] = await ethers.getSigners();
    token = await ethers.getContractFactory("Token");
    ve_underlying = await token.deploy('VE', 'VE', 18, owner.address) as BaseV1;
    await ve_underlying.mint(owner.address, ethers.BigNumber.from("1000000000000000000000000000"));
    await ve_underlying.mint(owner2.address, ethers.BigNumber.from("1000000000000000000000000000"));
    await ve_underlying.mint(owner3.address, ethers.BigNumber.from("1000000000000000000000000000"));
    reward2 = await token.deploy('VE', 'VE', 18, owner.address) as Token;
    await reward2.mint(owner.address, ethers.BigNumber.from("1000000000000000000000000000"));
    await reward2.mint(owner2.address, ethers.BigNumber.from("1000000000000000000000000000"));
    await reward2.mint(owner3.address, ethers.BigNumber.from("1000000000000000000000000000"));
    stake = await token.deploy('stake', 'stake', 18, owner.address) as Token;
    await stake.mint(owner.address, ethers.BigNumber.from("1000000000000000000000000000"));
    await stake.mint(owner2.address, ethers.BigNumber.from("1000000000000000000000000000"));
    await stake.mint(owner3.address, ethers.BigNumber.from("1000000000000000000000000000"));

    const vecontract = await ethers.getContractFactory("contracts/test/ve_test.sol:ve_test");
    ve = await vecontract.deploy(ve_underlying.address) as Ve;

    const voter_test = await ethers.getContractFactory("contracts/test/voter_test.sol:voter_test");
    voter = await voter_test.deploy() as BaseV1Voter;
  });

  it("create lock", async function () {
    await ve_underlying.approve(ve.address, ethers.BigNumber.from("1000000000000000000"));
    await ve.create_lock(ethers.BigNumber.from("1000000000000000000"), 4 * 365 * 86400);
  });

  it("create lock 2", async function () {
    await ve_underlying.connect(owner2).approve(ve.address, ethers.BigNumber.from("1000000000000000000"));
    await ve.connect(owner2).create_lock(ethers.BigNumber.from("1000000000000000000"), 4 * 365 * 86400);
  });

  it("create lock 3", async function () {
    await ve_underlying.connect(owner3).approve(ve.address, ethers.BigNumber.from("1000000000000000000"));
    await ve.connect(owner3).create_lock(ethers.BigNumber.from("1000000000000000000"), 4 * 365 * 86400);
  });


  it("deploy factory", async function () {
    const BaseV1GaugeFactory = await ethers.getContractFactory("BaseV1GaugeFactory");
    gauges_factory = await BaseV1GaugeFactory.deploy() as BaseV1GaugeFactory;
    gauges_factory.createGaugeSingle(stake.address, owner.address, ve.address, voter.address);
    const gauge_address = await gauges_factory.last_gauge();
    const Gauge = await ethers.getContractFactory("Gauge");
    gauge = await Gauge.attach(gauge_address);

    const sr = await ethers.getContractFactory("StakingRewards");
    staking = await sr.deploy(stake.address, ve_underlying.address) as StakingRewards;
  });


  it("deposit empty", async function () {
    const pair_1000 = ethers.BigNumber.from("1000000000000000000000");
    await stake.approve(staking.address, pair_1000);
    await stake.approve(gauge.address, pair_1000);
    await staking.stake(pair_1000);
    await gauge.deposit(pair_1000, 1);

    expect(await gauge.earned(ve_underlying.address, owner.address)).to.equal(await staking.earned(owner.address));
  });


  it("deposit empty 2", async function () {
    const pair_1000 = ethers.BigNumber.from("1000000000000000000000");
    await stake.connect(owner2).approve(staking.address, pair_1000);
    await stake.connect(owner2).approve(gauge.address, pair_1000);
    await staking.connect(owner2).stake(pair_1000);
    await gauge.connect(owner2).deposit(pair_1000, 2);

    expect(await gauge.earned(ve_underlying.address, owner2.address)).to.equal(await staking.earned(owner2.address));
  });


  it("deposit empty 3", async function () {
    const pair_1000 = ethers.BigNumber.from("1000000000000000000000");
    await stake.connect(owner3).approve(staking.address, pair_1000);
    await stake.connect(owner3).approve(gauge.address, pair_1000);
    await staking.connect(owner3).stake(pair_1000);
    await gauge.connect(owner3).deposit(pair_1000, 3);

    expect(await gauge.earned(ve_underlying.address, owner3.address)).to.equal(await staking.earned(owner3.address));
  });


  it("notify rewards and compare", async function () {
    const pair_1000000 = ethers.BigNumber.from("1000000000000000000000000");
    await ve_underlying.approve(staking.address, pair_1000000);
    await ve_underlying.approve(gauge.address, pair_1000000);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    await staking.notifyRewardAmount(pair_1000000);
    await gauge.notifyRewardAmount(ve_underlying.address, pair_1000000);
    await ethers.provider.send("evm_increaseTime", [1800])
    await ethers.provider.send("evm_mine", [])
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    await ve_underlying.approve(staking.address, pair_1000000);
    await ve_underlying.approve(gauge.address, pair_1000000);
    await staking.notifyRewardAmount(pair_1000000);
    await gauge.notifyRewardAmount(ve_underlying.address, pair_1000000);
    await ethers.provider.send("evm_increaseTime", [1800])
    await ethers.provider.send("evm_mine", [])
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
  });


  it("notify reward2 and compare", async function () {
    const pair_1000000 = ethers.BigNumber.from("1000000000000000000000000");
    await reward2.approve(gauge.address, pair_1000000);
    await gauge.notifyRewardAmount(reward2.address, pair_1000000);
    await ethers.provider.send("evm_increaseTime", [1800])
    await ethers.provider.send("evm_mine", [])
    await reward2.approve(gauge.address, pair_1000000);
    await gauge.notifyRewardAmount(reward2.address, pair_1000000);
    await ethers.provider.send("evm_increaseTime", [1800])
    await ethers.provider.send("evm_mine", [])
  });

  it("notify rewards and compare owner1", async function () {
    const pair_1000 = ethers.BigNumber.from("1000000000000000000000");
    await staking.withdraw(pair_1000);
    await gauge.withdraw(pair_1000);
    await stake.approve(staking.address, pair_1000);
    await stake.approve(gauge.address, pair_1000);
    await staking.stake(pair_1000);
    await gauge.deposit(pair_1000, 1);
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    await staking.withdraw(pair_1000);
    await gauge.withdraw(pair_1000);
    await stake.approve(staking.address, pair_1000);
    await stake.approve(gauge.address, pair_1000);
    await staking.stake(pair_1000);
    await gauge.deposit(pair_1000, 1);
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    await staking.withdraw(pair_1000);
    await gauge.withdraw(pair_1000);
    await stake.approve(staking.address, pair_1000);
    await stake.approve(gauge.address, pair_1000);
    await staking.stake(pair_1000);
    await gauge.deposit(pair_1000, 1);
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    await staking.withdraw(pair_1000);
    await gauge.withdraw(pair_1000);
    await stake.approve(staking.address, pair_1000);
    await stake.approve(gauge.address, pair_1000);
    await staking.stake(pair_1000);
    await gauge.deposit(pair_1000, 1);
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    await ethers.provider.send("evm_increaseTime", [1800])
    await ethers.provider.send("evm_mine", [])
    await staking.withdraw(pair_1000);
    await gauge.withdraw(pair_1000);
    await stake.approve(staking.address, pair_1000);
    await stake.approve(gauge.address, pair_1000);
    await staking.stake(pair_1000);
    await gauge.deposit(pair_1000, 1);
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    await ethers.provider.send("evm_increaseTime", [604800])
    await ethers.provider.send("evm_mine", [])
    await staking.withdraw(pair_1000);
    await gauge.withdraw(pair_1000);
    await stake.approve(staking.address, pair_1000);
    await stake.approve(gauge.address, pair_1000);
    await staking.stake(pair_1000);
    await gauge.deposit(pair_1000, 1);
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
  });

  it("notify rewards and compare owner2", async function () {
    const pair_1000 = ethers.BigNumber.from("1000000000000000000000");
    await staking.connect(owner2).withdraw(pair_1000);
    await gauge.connect(owner2).withdraw(pair_1000);
    await stake.connect(owner2).approve(staking.address, pair_1000);
    await stake.connect(owner2).approve(gauge.address, pair_1000);
    await staking.connect(owner2).stake(pair_1000);
    await gauge.connect(owner2).deposit(pair_1000, 2);
    await staking.connect(owner2).withdraw(pair_1000);
    await gauge.connect(owner2).withdraw(pair_1000);
    await stake.connect(owner2).approve(staking.address, pair_1000);
    await stake.connect(owner2).approve(gauge.address, pair_1000);
    await staking.connect(owner2).stake(pair_1000);
    await gauge.connect(owner2).deposit(pair_1000, 2);
    await staking.connect(owner2).withdraw(pair_1000);
    await gauge.connect(owner2).withdraw(pair_1000);
    await stake.connect(owner2).approve(staking.address, pair_1000);
    await stake.connect(owner2).approve(gauge.address, pair_1000);
    await staking.connect(owner2).stake(pair_1000);
    await gauge.connect(owner2).deposit(pair_1000, 2);
    await staking.connect(owner2).withdraw(pair_1000);
    await gauge.connect(owner2).withdraw(pair_1000);
    await stake.connect(owner2).approve(staking.address, pair_1000);
    await stake.connect(owner2).approve(gauge.address, pair_1000);
    await staking.connect(owner2).stake(pair_1000);
    await gauge.connect(owner2).deposit(pair_1000, 2);
    await staking.connect(owner2).withdraw(pair_1000);
    await gauge.connect(owner2).withdraw(pair_1000);
    await stake.connect(owner2).approve(staking.address, pair_1000);
    await stake.connect(owner2).approve(gauge.address, pair_1000);
    await staking.connect(owner2).stake(pair_1000);
    await gauge.connect(owner2).deposit(pair_1000, 2);
    await staking.connect(owner2).withdraw(pair_1000);
    await gauge.connect(owner2).withdraw(pair_1000);
    await stake.connect(owner2).approve(staking.address, pair_1000);
    await stake.connect(owner2).approve(gauge.address, pair_1000);
    await staking.connect(owner2).stake(pair_1000);
    await gauge.connect(owner2).deposit(pair_1000, 2);
  });

  it("notify rewards and compare owner3", async function () {
    const pair_1000 = ethers.BigNumber.from("1000000000000000000000");
    await staking.connect(owner3).withdraw(pair_1000);
    await gauge.connect(owner3).withdraw(pair_1000);
    await stake.connect(owner3).approve(staking.address, pair_1000);
    await stake.connect(owner3).approve(gauge.address, pair_1000);
    await staking.connect(owner3).stake(pair_1000);
    await gauge.connect(owner3).deposit(pair_1000, 3);
    await staking.connect(owner3).withdraw(pair_1000);
    await gauge.connect(owner3).withdraw(pair_1000);
    await stake.connect(owner3).approve(staking.address, pair_1000);
    await stake.connect(owner3).approve(gauge.address, pair_1000);
    await staking.connect(owner3).stake(pair_1000);
    await gauge.connect(owner3).deposit(pair_1000, 3);
    await staking.connect(owner3).withdraw(pair_1000);
    await gauge.connect(owner3).withdraw(pair_1000);
    await stake.connect(owner3).approve(staking.address, pair_1000);
    await stake.connect(owner3).approve(gauge.address, pair_1000);
    await staking.connect(owner3).stake(pair_1000);
    await gauge.connect(owner3).deposit(pair_1000, 3);
    await staking.connect(owner3).withdraw(pair_1000);
    await gauge.connect(owner3).withdraw(pair_1000);
    await stake.connect(owner3).approve(staking.address, pair_1000);
    await stake.connect(owner3).approve(gauge.address, pair_1000);
    await staking.connect(owner3).stake(pair_1000);
    await gauge.connect(owner3).deposit(pair_1000, 3);
    await staking.connect(owner3).withdraw(pair_1000);
    await gauge.connect(owner3).withdraw(pair_1000);
    await stake.connect(owner3).approve(staking.address, pair_1000);
    await stake.connect(owner3).approve(gauge.address, pair_1000);
    await staking.connect(owner3).stake(pair_1000);
    await gauge.connect(owner3).deposit(pair_1000, 3);
    await staking.connect(owner3).withdraw(pair_1000);
    await gauge.connect(owner3).withdraw(pair_1000);
    await stake.connect(owner3).approve(staking.address, pair_1000);
    await stake.connect(owner3).approve(gauge.address, pair_1000);
    await staking.connect(owner3).stake(pair_1000);
    await gauge.connect(owner3).deposit(pair_1000, 3);
  });

  it("deposit & withdraw without rewards", async function () {
    const pair_1000 = ethers.BigNumber.from("1000000000000000000000");
    await staking.withdraw(pair_1000);
    await gauge.withdraw(pair_1000);
    await stake.approve(staking.address, pair_1000);
    await stake.approve(gauge.address, pair_1000);
    await staking.stake(pair_1000);
    await gauge.deposit(pair_1000, 1);
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    await staking.withdraw(pair_1000);
    await gauge.withdraw(pair_1000);
    await stake.approve(staking.address, pair_1000);
    await stake.approve(gauge.address, pair_1000);
    await staking.stake(pair_1000);
    await gauge.deposit(pair_1000, 1);
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    await staking.withdraw(pair_1000);
    await gauge.withdraw(pair_1000);
    await stake.approve(staking.address, pair_1000);
    await stake.approve(gauge.address, pair_1000);
    await staking.stake(pair_1000);
    await gauge.deposit(pair_1000, 1);
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    await staking.withdraw(pair_1000);
    await gauge.withdraw(pair_1000);
    await stake.approve(staking.address, pair_1000);
    await stake.approve(gauge.address, pair_1000);
    await staking.stake(pair_1000);
    await gauge.deposit(pair_1000, 1);
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    await ethers.provider.send("evm_increaseTime", [1800])
    await ethers.provider.send("evm_mine", [])
    await staking.withdraw(pair_1000);
    await gauge.withdraw(pair_1000);
    await stake.approve(staking.address, pair_1000);
    await stake.approve(gauge.address, pair_1000);
    await staking.stake(pair_1000);
    await gauge.deposit(pair_1000, 1);
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    await ethers.provider.send("evm_increaseTime", [604800])
    await ethers.provider.send("evm_mine", [])
    await staking.withdraw(pair_1000);
    await gauge.withdraw(pair_1000);
    await stake.approve(staking.address, pair_1000);
    await stake.approve(gauge.address, pair_1000);
    await staking.stake(pair_1000);
    await gauge.deposit(pair_1000, 1);
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
  });

  it("notify rewards and compare set 2", async function () {
    const pair_1000000 = ethers.BigNumber.from("1000000000000000000000000");
    await ve_underlying.approve(staking.address, pair_1000000);
    await ve_underlying.approve(gauge.address, pair_1000000);
    await staking.notifyRewardAmount(pair_1000000);
    await gauge.notifyRewardAmount(ve_underlying.address, pair_1000000);
    await ethers.provider.send("evm_increaseTime", [1800])
    await ethers.provider.send("evm_mine", [])
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    await ve_underlying.approve(staking.address, pair_1000000);
    await ve_underlying.approve(gauge.address, pair_1000000);
    await staking.notifyRewardAmount(pair_1000000);
    await gauge.notifyRewardAmount(ve_underlying.address, pair_1000000);
    await ethers.provider.send("evm_increaseTime", [1800])
    await ethers.provider.send("evm_mine", [])
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    expect(await gauge.derivedSupply()).to.equal(await staking.totalSupply());
  });

  it("notify reward2 and compare set 2", async function () {
    const pair_1000000 = ethers.BigNumber.from("1000000000000000000000000");
    await reward2.approve(gauge.address, pair_1000000);
    await gauge.notifyRewardAmount(reward2.address, pair_1000000);
    await ethers.provider.send("evm_increaseTime", [1800])
    await ethers.provider.send("evm_mine", [])
    await reward2.approve(gauge.address, pair_1000000);
    await gauge.notifyRewardAmount(reward2.address, pair_1000000);
    await ethers.provider.send("evm_increaseTime", [1800])
    await ethers.provider.send("evm_mine", [])
  });

  it("notify rewards and compare owner1", async function () {
    const pair_1000 = ethers.BigNumber.from("1000000000000000000000");
    await staking.withdraw(pair_1000);
    await gauge.withdraw(pair_1000);
    await stake.approve(staking.address, pair_1000);
    await stake.approve(gauge.address, pair_1000);
    await staking.stake(pair_1000);
    await gauge.deposit(pair_1000, 1);
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    await staking.withdraw(pair_1000);
    await gauge.withdraw(pair_1000);
    await stake.approve(staking.address, pair_1000);
    await stake.approve(gauge.address, pair_1000);
    await staking.stake(pair_1000);
    await gauge.deposit(pair_1000, 1);
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    await staking.withdraw(pair_1000);
    await gauge.withdraw(pair_1000);
    await stake.approve(staking.address, pair_1000);
    await stake.approve(gauge.address, pair_1000);
    await staking.stake(pair_1000);
    await gauge.deposit(pair_1000, 1);
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    await staking.withdraw(pair_1000);
    await gauge.withdraw(pair_1000);
    await stake.approve(staking.address, pair_1000);
    await stake.approve(gauge.address, pair_1000);
    await staking.stake(pair_1000);
    await gauge.deposit(pair_1000, 1);
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    await ethers.provider.send("evm_increaseTime", [1800])
    await ethers.provider.send("evm_mine", [])
    await staking.withdraw(pair_1000);
    await gauge.withdraw(pair_1000);
    await stake.approve(staking.address, pair_1000);
    await stake.approve(gauge.address, pair_1000);
    await staking.stake(pair_1000);
    await gauge.deposit(pair_1000, 1);
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    const sb = await ve_underlying.balanceOf(owner.address);
    await staking.getReward();
    const sa = await ve_underlying.balanceOf(owner.address);
    const gb = await ve_underlying.balanceOf(owner.address);
    await gauge.getReward(owner.address, [ve_underlying.address])
    const ga = await ve_underlying.balanceOf(owner.address);
    await ethers.provider.send("evm_increaseTime", [604800])
    await ethers.provider.send("evm_mine", [])
    await staking.withdraw(pair_1000);
    await gauge.withdraw(pair_1000);
    await stake.approve(staking.address, pair_1000);
    await stake.approve(gauge.address, pair_1000);
    await staking.stake(pair_1000);
    await gauge.deposit(pair_1000, 1);
    await gauge.batchRewardPerToken(ve_underlying.address, 200);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    expect(await staking.rewardPerTokenStored()).to.above(ethers.BigNumber.from("1330355346300364281191"))
  });

  it("notify rewards and compare owner2", async function () {
    const pair_1000 = ethers.BigNumber.from("1000000000000000000000");
    await staking.connect(owner2).withdraw(pair_1000);
    await gauge.connect(owner2).withdraw(pair_1000);
    await stake.connect(owner2).approve(staking.address, pair_1000);
    await stake.connect(owner2).approve(gauge.address, pair_1000);
    await staking.connect(owner2).stake(pair_1000);
    await gauge.connect(owner2).deposit(pair_1000, 2);
    await staking.connect(owner2).withdraw(pair_1000);
    await gauge.connect(owner2).withdraw(pair_1000);
    await stake.connect(owner2).approve(staking.address, pair_1000);
    await stake.connect(owner2).approve(gauge.address, pair_1000);
    await staking.connect(owner2).stake(pair_1000);
    await gauge.connect(owner2).deposit(pair_1000, 2);
    await staking.connect(owner2).withdraw(pair_1000);
    await gauge.connect(owner2).withdraw(pair_1000);
    await stake.connect(owner2).approve(staking.address, pair_1000);
    await stake.connect(owner2).approve(gauge.address, pair_1000);
    await staking.connect(owner2).stake(pair_1000);
    await gauge.connect(owner2).deposit(pair_1000, 2);
    await staking.connect(owner2).withdraw(pair_1000);
    await gauge.connect(owner2).withdraw(pair_1000);
    await stake.connect(owner2).approve(staking.address, pair_1000);
    await stake.connect(owner2).approve(gauge.address, pair_1000);
    await staking.connect(owner2).stake(pair_1000);
    await gauge.connect(owner2).deposit(pair_1000, 2);
    await ethers.provider.send("evm_increaseTime", [1800])
    await ethers.provider.send("evm_mine", [])
    await staking.connect(owner2).withdraw(pair_1000);
    await gauge.connect(owner2).withdraw(pair_1000);
    await stake.connect(owner2).approve(staking.address, pair_1000);
    await stake.connect(owner2).approve(gauge.address, pair_1000);
    await staking.connect(owner2).stake(pair_1000);
    await gauge.connect(owner2).deposit(pair_1000, 2);
    await staking.connect(owner2).getReward();
    await gauge.connect(owner2).getReward(owner2.address, [ve_underlying.address])
    await ethers.provider.send("evm_increaseTime", [604800])
    await ethers.provider.send("evm_mine", [])
    await staking.connect(owner2).withdraw(pair_1000);
    await gauge.connect(owner2).withdraw(pair_1000);
    await stake.connect(owner2).approve(staking.address, pair_1000);
    await stake.connect(owner2).approve(gauge.address, pair_1000);
    await staking.connect(owner2).stake(pair_1000);
    await gauge.connect(owner2).deposit(pair_1000, 2);
    expect(await staking.rewardPerTokenStored()).to.equal(await gauge.rewardPerTokenStored(ve_underlying.address))
    expect(await staking.rewardPerTokenStored()).to.above(ethers.BigNumber.from("1330355346300364281191"))
  });

  it("claim reward2 owner1", async function () {
    const pair_1000 = ethers.BigNumber.from("1000000000000000000000");
    await staking.withdraw(pair_1000);
    await gauge.withdraw(pair_1000);
    await stake.approve(staking.address, pair_1000);
    await stake.approve(gauge.address, pair_1000);
    await staking.stake(pair_1000);
    await gauge.deposit(pair_1000, 1);
    await gauge.batchRewardPerToken(reward2.address, 200);
    const expected1 = await gauge.earned(reward2.address, owner.address);

    const before = await reward2.balanceOf(owner.address);
    await gauge.getReward(owner.address, [reward2.address])
    const after = await reward2.balanceOf(owner.address);

    expect(after.sub(before)).to.equal(expected1);
    expect(expected1).to.be.above(0);
  });


});
