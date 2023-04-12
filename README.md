# Project Name

## Description

Write a description of your project here.

## Installation

```shell
yarn
# or if you prefer npm
npm install
```

### Requirements

Write the requirements of your project here.

## Usage

### Development

```shell
# .env.development
yarn dev

yarn start:dev --mode development
# or if you prefer npm
npm run dev --mode development
npm run start:dev --mode development
```

### Test

```shell
# .env.test

yarn start:test --mode test
# or if you prefer npm
npm run start:test --mode test
```

### Production

```shell
# .env.production

yarn build --mode production
# or if you prefer npm
npm run build --mode production
```

## Norms

### Commit

```shell
<type>[(<scope>)] <subject>
<body>
```

### Type of commit

- build: Changes that affect the build system (makefile, package.json, etc...)
- ci: Changes concerning integration or configuration files and scripts
  (Travis, Ansible, BrowserStack...)
- feat: A new feature (e.g. a new class, method, function, etc...)
- change: Change something without add or remove something
- fix: A bug fix
- perf: A code change that improves performance
- refactor: Change that does not add new functionality or performance
  improvements
- docs: Changes to documentation
- test: Changes to tests

### Example

```shell
git add src/logger/logger.c
git commit -m "feat[logger]: Add logger" -m "desctiption of the commit"
```
Description of the commit is optional.

### Branch

- main: The main branch
- develop: The branch where the new features are merged
- feature: The branch where the new features are developed
- hotfix: The branch where the hotfixes are developed

### Example

#### Create a new feature

```shell
git checkout -b feature/my-feature develop
```

#### Merge a feature

```shell
git checkout develop
git merge --no-ff feature/my-feature
git branch -d feature/my-feature
git push origin develop
```

#### Create a hotfix

```shell
git checkout -b hotfix/my-hotfix main
```

#### Merge a hotfix

```shell
git checkout main
git merge --no-ff hotfix/my-hotfix
git branch -d hotfix/my-hotfix
git push origin main
```

## Contributing

Write the contributing of your project here.
