import { createCipheriv, randomBytes, createDecipheriv } from "node:crypto";

// Cipher message
const message = "hello world";
const key = randomBytes(32);
const initialVector = randomBytes(16);

// Encrypt
const cipher = createCipheriv("aes256", key, initialVector);
const messageEncrypted =
  cipher.update(message, "utf8", "hex") + cipher.final("hex");

// Decrypt
const decipher = createDecipheriv("aes256", key, initialVector);
const messageDecrypted =
  decipher.update(messageEncrypted, "hex", "utf-8") + decipher.final("utf8");

console.log({
  messageEncrypted,
  messageDecrypted,
});
