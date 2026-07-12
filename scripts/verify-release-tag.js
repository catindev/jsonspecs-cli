#!/usr/bin/env node
"use strict";

const path = require("node:path");
const { readJson } = require("./release-package");

const tag = process.argv[2];
const packageJson = readJson(path.resolve(__dirname, "..", "package.json"));
if (tag !== `v${packageJson.version}`) {
  throw new Error(`release tag ${tag || "<missing>"} does not match package version v${packageJson.version}`);
}
console.log(`[jsonspecs-cli] release tag ${tag} matches package version`);
