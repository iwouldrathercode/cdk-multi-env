#!/usr/bin/env node
import { App } from 'aws-cdk-lib';
import 'source-map-support/register';
import { loadCurrentEnvironment } from '../utils';
import { CdkMultiEnvStack } from '../lib/cdk-multi-env-stack';

const app = new App();
loadCurrentEnvironment();

new CdkMultiEnvStack(app, 'CdkMultiEnvStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
  tags: { branch: process.env.BRANCH ?? "dev", environment: process.env.ENVIRONMENT ?? "dev" }
});

