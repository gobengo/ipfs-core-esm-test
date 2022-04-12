// ipfs-core does this import, which is why it looked like an issue there
import globSourceImport from "ipfs-utils/src/files/glob-source.js";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function sayHelloWorld() {
  return `Hello`;
}

export function createFsReadStream() {
  return fs.createReadStream(path.join(__dirname, "../README.md"));
}

export async function iterateGlob() {
  for await (const file of globSourceImport(__dirname, "*")) {
    console.log(file.path);
  }
}
