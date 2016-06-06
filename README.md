# boilerplate-javascript
## Release Workflow with run-scripts
### TL;DR
To be safe, start clean:

1. Run `npm run clean`
1. Run `npm install`
1. Run `npm test`

Then release (to npm and GitHub respectively:)

1. Run `git push origin <topic branch>`
1. Confirm build success with Travis
1. Run `npm version <patch|minor|major>`
1. Run `git push --follow-tags`

### Explanation
Much of the work around publishing new releases is centered around the `npm version` command which, when run with the proper patch/minor/major parameter, triggers the following events:

1. The command `npm version` runs, incrementing the version in package.json and tagging the branch
1. Any existing npm-shrinkwrap.json file is removed
1. The command `npm shrinkwrap` generates a new npm-shrinkwrap.json file
1. The command `npm publish` runs, making the new module version available on npmjs.com

### Recovering from a failure to release
After resolving the core issue, you can recover in one of the following ways:

* Run `npm version` if that was the actual command which failed (e.g. the git working tree is dirty)
* Run `npm publish` if almost any other step fails, because the entire process is kicked off by and follows a successful run of `npm version` which launches `npm publish`.

For example, if `npm shrinkwrap` failed due to an out-of-sync node_modules folder, it would require:

1. Resolving the shrinkwrap problem (i.e. clean and reinstall the dependencies)
1. Running `npm publish` manually to trigger `npm shrinkwrap`, 

It does not require running `npm version,` because it failed in the "postversion" scripts.

### Updating to publish from Travis
To have Travis CI handle publishing the new module version to npm, it should be as simple as replacing the postversion command with `git push --follow-tags` and ensure Travis executes `npm prepublish` before running its native deploy process (however this is untested).
