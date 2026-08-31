import test from "node:test";
import assert from "node:assert/strict";
import { getSkill, getPrompt, metadata } from "../src/index.js";

test("skill is loaded", () => {
  const skill = getSkill();
  assert.match(skill, /baowenfeng-perspective/);
  assert.match(skill, /角色扮演规则/);
});

test("prompt contains the skill", () => {
  const prompt = getPrompt();
  assert.match(prompt, /Use the following skill/);
  assert.match(prompt, /回答工作流/);
});

test("metadata is correct", () => {
  assert.equal(metadata.name, "baowenfeng-perspective");
  assert.equal(metadata.version, "1.0.0");
});
