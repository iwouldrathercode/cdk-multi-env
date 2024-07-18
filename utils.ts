import * as dotenv from 'dotenv';
import git from "@rkesters/git-agent";

export class InfrastructureContext {
  private currentBranch: string;
  private envFile: string;

  constructor() {
    this.currentBranch = git.branchName();
    this.envFile = `.env.${this.currentBranch}`;
  }

  public load() {
    dotenv.config({ path: this.envFile });
  }
}