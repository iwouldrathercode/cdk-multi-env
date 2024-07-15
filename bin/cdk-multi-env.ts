#!/usr/bin/env node
import * as dotenv from 'dotenv';
import { App } from 'aws-cdk-lib';
import 'source-map-support/register';
import git from "@rkesters/git-agent";
import { CdkMultiEnvStack } from '../lib/cdk-multi-env-stack';

const app = new App();

// Get current branch and load necessary env file
const currentBranch = git.branchName();
const environments = app.node.tryGetContext('environments');
const environment = environments.find((e: any) => e.branch === currentBranch);
const environmentConfigurationFile = environment.config;
dotenv.config({ path: environmentConfigurationFile });

new CdkMultiEnvStack(app, 'CdkMultiEnvStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
  tags: { branch: currentBranch, environment: environment.name }
});
