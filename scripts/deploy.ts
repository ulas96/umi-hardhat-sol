import { BCS, getRustConfig } from "@benfen/bcs";
import { ethers } from "hardhat";

const bcs = new BCS(getRustConfig());
// EVM contracts are encapsulated in an enum along with script transactions
bcs.registerEnumType("ScriptOrDeployment", {
  Script: "",
  Module: "",
  EvmContract: "Vec<u8>",
});

bcs.registerEnumType("SerializableTransactionData", {
  EoaBaseTokenTransfer: "",
  ScriptOrDeployment: "",
  EntryFunction: "",
  L2Contract: "",
  EvmContract: "Vec<u8>",
});

const serialize = (bytecode: string): string => {
  // Extract the byte array to serialize within the higher level enum
  const code = Uint8Array.from(Buffer.from(bytecode.replace("0x", ""), "hex"));
  const evmContract = bcs.ser("ScriptOrDeployment", { EvmContract: code });
  return "0x" + evmContract.toString("hex");
};

async function main() {
  const Counter = await ethers.getContractFactory("Counter");
  const code = serialize(Counter.bytecode);
  console.log("CODE:", code);
  const counter = await Counter.deploy();
  await counter.waitForDeployment();
  console.log("Counter is deployed to:", await counter.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
