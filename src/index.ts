// this builds
// import * as IPFS from "ipfs-utils";

/*
This errors with:

node_modules/ipfs-utils/dist/src/files/glob-source.d.ts:10:14 - error TS2503: Cannot find namespace 'fs'.

10     content: fs.ReadStream | undefined;
                ~~
*/
import * as IPFSUtils from "ipfs-utils";

export function sayHelloWorld() {
  return `Hello ${IPFSUtils}`;
}
