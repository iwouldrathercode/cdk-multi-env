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
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `npx cdk deploy` deploy this stack to your default AWS account/region
- `npx cdk diff` compare deployed stack with current state
- `npx cdk synth` emits the synthesized CloudFormation template
