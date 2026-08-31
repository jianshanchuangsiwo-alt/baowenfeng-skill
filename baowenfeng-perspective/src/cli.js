#!/usr/bin/env node
import { getPrompt } from "./index.js";

const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h")) {
  console.log(`baowenfeng-perspective

Usage:
  baowenfeng-perspective              Print the complete prompt
  baowenfeng-perspective --skill      Print the raw SKILL.md
  baowenfeng-perspective --json       Print package metadata
`);
  process.exit(0);
}

if (args.includes("--json")) {
  console.log(JSON.stringify({
    name: "baowenfeng-perspective",
    version: "1.0.0"
  }, null, 2));
} else {
  console.log(getPrompt());
}
