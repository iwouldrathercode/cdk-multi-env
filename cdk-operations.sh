#!/bin/sh

# Function to source environment file
source_env() {
  BRANCH=$(git rev-parse --abbrev-ref HEAD)
  if [ -f ".env.$BRANCH" ]; then
    source .env.$BRANCH
    echo "Using AWS profile: $AWS_PROFILE"
  else
    echo "Environment file .env.$BRANCH not found!"
    exit 1
  fi
}

# Function to deploy using CDK
deploy() {
  source_env
  cdk deploy --profile $AWS_PROFILE --region $DEFAULT_REGION
}

# Function to destroy the stack
destroy() {
  source_env
  cdk destroy --profile $AWS_PROFILE --region $DEFAULT_REGION
}

# Function to bootstrap the CDK environment
bootstrap() {
  source_env
  cdk bootstrap --profile $AWS_PROFILE --region $DEFAULT_REGION
}

# Main script logic
case "$1" in
  deploy)
    deploy
    ;;
  destroy)
    destroy
    ;;
  bootstrap)
    bootstrap
    ;;
  *)
    echo "Usage: $0 {deploy|destroy|bootstrap}"
    exit 1
    ;;
esac