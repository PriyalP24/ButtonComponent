# Release Process

Release versions follow [Semver](https://semver.org/). To create a new release, use the following process.

1. Commit and push changes on a feature branch, and create a pull request against `master`. Include updates to the `CHANGELOG`.

2. After merging changes, manually increment the version in `package.json`.

3. Run `git tag v1.1`, using the new version number.

4. If everything looks good, push tags to GitHub, `git push origin master --tags`

5. In GitHub, create a release from the new tag in the following format.

Title:

```
v1.1.0
```

Description (copy directly from `CHANGELOG`):

```md
## v1.1.0 (Feburary 23, 2020)

- Added support for `@storybook/html`
```

After creating the release, a GitHub action will run to publish the release to npm.
