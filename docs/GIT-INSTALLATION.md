# Git installation

## Why this works

The consumer asks npm for a Git commit identified by a tag:

```json
{
  "dependencies": {
    "rn-component-library-demo": "github:UMSI669/rn-component-library-demo#v1.0.0"
  }
}
```

npm downloads that repository snapshot and exposes the package described by its
root `package.json`. The committed `dist/` directory contains the JavaScript and
types referenced by `main`, `react-native`, `types`, and `exports`.

This change allows `npm install` from your own GitHub repository instead of a
public project listed on npm.

## Before tagging

1. Run `npm run verify` and `npm run build-storybook`.
2. Confirm the current `dist/` files are included in your commit.
3. Commit, then create and push the tag:

```sh
git tag v1.0.0
git push origin main --tags
```

Tags are readable names for exact commits. Updating files later does not alter
what `#v1.0.0` installs; create a new tag for a new release.

## Commit references

For an immutable dependency without a version tag, use the complete commit SHA:

```text
github:OWNER/rn-component-library-demo#0123456789abcdef0123456789abcdef01234567
```

## `private` does not mean inaccessible

`"private": true` prevents accidental publication to the npm registry. Git
installation still works when the user has access to the GitHub repository.
