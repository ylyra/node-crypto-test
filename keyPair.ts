import { generateKeyPairSync } from "node:crypto";

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048, // length of your key in bits
  publicKeyEncoding: {
    type: "spki", // recommended to be 'spki' by the Node.js docs
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8", // recommended to be 'pkcs8' by Node,js docs
    format: "pem",
    cipher: "aes-256-cbc",
    passphrase: "top secret",
  },
});

console.log({
  privateKey,
  publicKey,
});

export { privateKey, publicKey };
