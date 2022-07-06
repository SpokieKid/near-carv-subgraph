// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class UserNftStat extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserNftStat entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UserNftStat must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UserNftStat", id.toString(), this);
    }
  }

  static load(id: string): UserNftStat | null {
    return changetype<UserNftStat | null>(store.get("UserNftStat", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get nftContract(): string {
    let value = this.get("nftContract");
    return value!.toString();
  }

  set nftContract(value: string) {
    this.set("nftContract", Value.fromString(value));
  }

  get userAddress(): string {
    let value = this.get("userAddress");
    return value!.toString();
  }

  set userAddress(value: string) {
    this.set("userAddress", Value.fromString(value));
  }

  get nftsIn(): string {
    let value = this.get("nftsIn");
    return value!.toString();
  }

  set nftsIn(value: string) {
    this.set("nftsIn", Value.fromString(value));
  }

  get nftsOut(): BigInt {
    let value = this.get("nftsOut");
    return value!.toBigInt();
  }

  set nftsOut(value: BigInt) {
    this.set("nftsOut", Value.fromBigInt(value));
  }

  get nftsMinted(): BigInt {
    let value = this.get("nftsMinted");
    return value!.toBigInt();
  }

  set nftsMinted(value: BigInt) {
    this.set("nftsMinted", Value.fromBigInt(value));
  }

  get nftsBurnt(): BigInt {
    let value = this.get("nftsBurnt");
    return value!.toBigInt();
  }

  set nftsBurnt(value: BigInt) {
    this.set("nftsBurnt", Value.fromBigInt(value));
  }

  get firstTs(): BigInt {
    let value = this.get("firstTs");
    return value!.toBigInt();
  }

  set firstTs(value: BigInt) {
    this.set("firstTs", Value.fromBigInt(value));
  }
}

export class NftContractStat extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NftContractStat entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NftContractStat must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NftContractStat", id.toString(), this);
    }
  }

  static load(id: string): NftContractStat | null {
    return changetype<NftContractStat | null>(store.get("NftContractStat", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get nftsTransferred(): BigInt {
    let value = this.get("nftsTransferred");
    return value!.toBigInt();
  }

  set nftsTransferred(value: BigInt) {
    this.set("nftsTransferred", Value.fromBigInt(value));
  }

  get nftsMinted(): BigInt {
    let value = this.get("nftsMinted");
    return value!.toBigInt();
  }

  set nftsMinted(value: BigInt) {
    this.set("nftsMinted", Value.fromBigInt(value));
  }

  get nftsBurnt(): BigInt {
    let value = this.get("nftsBurnt");
    return value!.toBigInt();
  }

  set nftsBurnt(value: BigInt) {
    this.set("nftsBurnt", Value.fromBigInt(value));
  }

  get firstTs(): BigInt {
    let value = this.get("firstTs");
    return value!.toBigInt();
  }

  set firstTs(value: BigInt) {
    this.set("firstTs", Value.fromBigInt(value));
  }
}

export class NftTokenStat extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NftTokenStat entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NftTokenStat must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NftTokenStat", id.toString(), this);
    }
  }

  static load(id: string): NftTokenStat | null {
    return changetype<NftTokenStat | null>(store.get("NftTokenStat", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get nftContract(): string {
    let value = this.get("nftContract");
    return value!.toString();
  }

  set nftContract(value: string) {
    this.set("nftContract", Value.fromString(value));
  }

  get nftTokenId(): BigInt {
    let value = this.get("nftTokenId");
    return value!.toBigInt();
  }

  set nftTokenId(value: BigInt) {
    this.set("nftTokenId", Value.fromBigInt(value));
  }

  get nftsTransferred(): BigInt {
    let value = this.get("nftsTransferred");
    return value!.toBigInt();
  }

  set nftsTransferred(value: BigInt) {
    this.set("nftsTransferred", Value.fromBigInt(value));
  }

  get nftsMinted(): BigInt {
    let value = this.get("nftsMinted");
    return value!.toBigInt();
  }

  set nftsMinted(value: BigInt) {
    this.set("nftsMinted", Value.fromBigInt(value));
  }

  get nftsBurnt(): BigInt {
    let value = this.get("nftsBurnt");
    return value!.toBigInt();
  }

  set nftsBurnt(value: BigInt) {
    this.set("nftsBurnt", Value.fromBigInt(value));
  }

  get firstTs(): BigInt {
    let value = this.get("firstTs");
    return value!.toBigInt();
  }

  set firstTs(value: BigInt) {
    this.set("firstTs", Value.fromBigInt(value));
  }
}
