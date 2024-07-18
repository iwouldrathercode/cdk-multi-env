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
    console.log(`Git Branch ${this.currentBranch}`);
    console.log(`Loading configuration from ${this.envFile}`);
    console.log(`Git Branch ${process.env.BRANCH}`);
    console.log(`Environment ${process.env.ENVIRONMENT}`);
    console.log(`Profile ${process.env.AWS_PROFILE}`);
    console.log(`Region ${process.env.CDK_DEFAULT_REGION}`);
    console.log(`Deploying to ${process.env.CDK_DEFAULT_ACCOUNT}`);

  }
}