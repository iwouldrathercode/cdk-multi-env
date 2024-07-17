#!/usr/bin/env node
import * as dotenv from 'dotenv';
import { App } from 'aws-cdk-lib';
import 'source-map-support/register';
import git from "@rkesters/git-agent";
import { CdkMultiEnvStack } from '../lib/cdk-multi-env-stack';

const app = new App();

// Evaluate current git branch and resolve the appropriate env file
const currentBranch = git.branchName();
const envFile = `.env.${currentBranch}`;
dotenv.config({ path: envFile });

new CdkMultiEnvStack(app, 'CdkMultiEnvStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
  tags: { branch: process.env.BRANCH ?? "dev", environment: process.env.ENVIRONMENT ?? "dev" }
});

