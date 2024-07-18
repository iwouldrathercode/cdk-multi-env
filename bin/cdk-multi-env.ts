#!/usr/bin/env node
import { App } from 'aws-cdk-lib';
import 'source-map-support/register';
import { InfrastructureContext } from '../utils';
import { CdkMultiEnvStack } from '../lib/cdk-multi-env-stack';

const environment = new InfrastructureContext();
environment.load();

const app = new App();
new CdkMultiEnvStack(app, 'CdkMultiEnvStack', {
  env: { account: process.env.DEFAULT_ACCOUNT, region: process.env.DEFAULT_REGION },
  tags: { branch: process.env.BRANCH ?? "dev", environment: process.env.ENVIRONMENT ?? "dev" }
});

