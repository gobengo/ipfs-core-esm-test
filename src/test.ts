import * as IPFSUtils from "ipfs-utils";
// import * as IPFSCore from "ipfs-core";
import * as assert from "assert";

assert.ok(IPFSUtils);
// assert.ok(IPFSCore);

import { iterateGlob } from "./index.js";

(async () => {
  await iterateGlob();
})();
