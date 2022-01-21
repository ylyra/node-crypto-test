import { privateDecrypt, publicEncrypt } from "node:crypto";
import { privateKey, publicKey } from "./keyPair";

const message = "hello";
const encryptedData = publicEncrypt(publicKey, Buffer.from(message));

const decryptedData = privateDecrypt(privateKey, encryptedData);

console.log({
  privateKey,
  publicKey,
  encryptedData: encryptedData.toString("hex"),
  decryptedData: decryptedData.toString("utf-8"),
});
