import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const skillPath = join(__dirname, "..", "SKILL.md");

/**
 * Return the complete skill markdown.
 */
export function getSkill() {
  return readFileSync(skillPath, "utf8");
}

/**
 * Return a system/developer prompt wrapper containing the skill.
 * The package does not call an AI API; it only provides reusable prompt data.
 */
export function getPrompt(options = {}) {
  const label = options.label ?? "baowenfeng-perspective";
  return [
    `# ${label}`,
    "",
    "Use the following skill as the governing persona/perspective specification.",
    "Do not claim the output is an authentic statement from a real person unless separately verified.",
    "",
    getSkill().trim(),
  ].join("\n");
}

export const metadata = {
  name: "baowenfeng-perspective",
  version: "1.0.0",
  skillFile: "SKILL.md",
};

export default {
  getSkill,
  getPrompt,
  metadata,
};
