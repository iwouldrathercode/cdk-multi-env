# CDK multi config. typeScript project

## Steps to deploy this CDK project

This project uses ✨ magic of git-hooks and npm scripts 🪄

- After git clone, run npm install to install dependencies
- Project will automatically run `postinstall` script of npm and add a githook to take action on branch change
- Contents of the git-hook can be customized by editing post-checkout file
  - If edited again run `npm run setup-hooks`
- The project uses git branches to manage environments
- It needs a unique .env file per git branch - (ex: .env.<branch-name>)
- Currently there are two branches - main and develop
- Duplicate the .env.example file as .env.main and .env.develop
- Modify the `CDK_DEFAULT_ACCOUNT` and `CDK_DEFAULT_REGION` values

## Usage

So every time you have different branches, you can add a corresponding aws sandbox or prod account

- If you want to deploy to your `dev` aws account, you only have to `git checkout <dev branch>` and `cdk deploy`
- If you want to deploy to your `prod` aws account, you only have to `git checkout <main branch>` and `cdk deploy`

## Steps to deploy to a sandbox aws account

- Populate the relevant values in `.env.develop`
- `git checkout develop`
  - This will automatically run a git hook to source appropriate `.env.develop` file and sets env vars.
- cdk bootstrap --profile $AWS_PROFILE (skip if already completed)
- cdk deploy --profile $AWS_PROFILE

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
