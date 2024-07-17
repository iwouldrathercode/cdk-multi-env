import * as dotenv from 'dotenv';
import git from "@rkesters/git-agent";

export function loadCurrentEnvironment() {
  // Evaluate current git branch and resolve the appropriate env file
  const currentBranch = git.branchName();
  const envFile = `.env.${currentBranch}`;
  dotenv.config({ path: envFile });
}