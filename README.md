# CDK multi config. typeScript project

## Steps to deploy this CDK project

This project uses ✨ magic of git-branch and npm scripts 🪄

- After git clone, run npm install to install dependencies
- The project uses git branches to manage environments
- It needs a unique .env file per git branch - (ex: .env.<branch-name>)
- Currently there are two branches - main and develop
- Duplicate the .env.example file as .env.main and .env.develop
- Modify the `CDK_DEFAULT_ACCOUNT` and `CDK_DEFAULT_REGION` values

## Usage

So every time you have different branches, you can add a corresponding aws sandbox or prod account

- If you want to deploy to your `dev` aws account, you only have to
- Populate the relevant values in `.env.develop`

```sh
git checkout develop && npm run deploy:dev
```

- If you want to deploy to your `prod` aws account, you only have to
- Populate the relevant values in `.env.main`

```sh
git checkout main && npm run deploy:prod
```

## Example contents inside an .env.develop file

```
BRANCH=develop
ENVIRONMENT=dev

AWS_PROFILE = "burner"
CDK_DEFAULT_REGION = "ap-southeast-2"
CDK_DEFAULT_ACCOUNT = 123456789101
```

## Useful commands

- `npm run build` compile typescript to js
- `npm run setup-hooks` to update changes done to the git-hook/postinstall file
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `npx cdk diff` compare deployed stack with current state
- `npx cdk synth` emits the synthesized CloudFormation template

## Deploy commands

- `npm run deploy` Automatically picks the branch name and approprirate .env file and deploys
- `npm run deploy:dev` Deploy this stack to your `sandbox` env AWS account/region
- `npm run deploy:prod` Deploy this stack to your `prod` env AWS account/region
