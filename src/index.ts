// this builds
// import * as IPFSUtils from "ipfs-utils";
import globSourceImport from "ipfs-utils/src/files/glob-source.js";
import * as fs from "fs";
import * as path from "path";

/*
This errors with:

node_modules/ipfs-utils/dist/src/files/glob-source.d.ts:10:14 - error TS2503: Cannot find namespace 'fs'.

10     content: fs.ReadStream | undefined;
                ~~
*/
import * as IPFSCore from "ipfs-core";

export function sayHelloWorld() {
  return `Hello`;
}

export function createFsReadStream() {
  return fs.createReadStream(path.join(__dirname, "../README.md"));
}
