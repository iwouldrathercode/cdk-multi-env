#!/bin/sh

# Get the current branch name
BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Source the corresponding environment file
if [ -f ".env.$BRANCH" ]; then
  source .env.$BRANCH
  echo "Using AWS profile: $AWS_PROFILE"
else
  echo "Environment file .env.$BRANCH not found!"
  exit 1
fi

# Bootstrap the CDK environment
cdk bootstrap --profile $AWS_PROFILE --region $DEFAULT_REGION