# CDK multi config. typeScript project

## Steps to deploy this CDK project

- After git clone, run npm install to install dependencies
  - This will add the necessary git-hooks
- The project uses git branches to manage environments
- It needs a unique .env file per git branch - (ex: .env.<branch-name>)
- So every time you have different branches, you can add a corresponding aws sandbox or testing account
  - If you want to deploy to your `dev` aws account, you only have to `git checkout <dev branch>` and `cdk deploy`
  - If you want to deploy to your `prod` aws account, you only have to `git checkout <main / master branch>` and `cdk deploy`

## Steps to deploy to a sandbox aws account

- Update `cdk.json` file regarding new env
- Populate the relevant values in `.env.develop`
- `git checkout develop`
  - This will automatically run a git hook to source appropriate `.env.develop` file and sets env vars.
- cdk bootstrap (skip if already completed)
- cdk deploy

## Example contents inside an .env.<branch-name> file

```
AWS_PROFILE = "burner"
CDK_DEFAULT_REGION = "ap-southeast-2"
CDK_DEFAULT_ACCOUNT = 123456789101
```

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `npx cdk deploy` deploy this stack to your default AWS account/region
- `npx cdk diff` compare deployed stack with current state
- `npx cdk synth` emits the synthesized CloudFormation template
