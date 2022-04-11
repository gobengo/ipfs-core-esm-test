// ipfs-core does this import, which is why it looked like an issue there
import globSourceImport from "ipfs-utils/src/files/glob-source.js";
/*
This errors with:

node_modules/ipfs-utils/dist/src/files/glob-source.d.ts:10:14 - error TS2503: Cannot find namespace 'fs'.

10     content: fs.ReadStream | undefined;
                ~~
*/

import * as fs from "fs";
import * as path from "path";

export function sayHelloWorld() {
  return `Hello`;
}

export function createFsReadStream() {
  return fs.createReadStream(path.join(__dirname, "../README.md"));
}
