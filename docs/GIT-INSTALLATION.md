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

## Enable GitHub Pages once

Before the first Pages workflow run, open the library repository on GitHub and
select **Settings → Pages → Build and deployment → Source → GitHub Actions**.
This creates the Pages site that `actions/configure-pages` configures. Without
that one-time setting, GitHub's Pages API returns `404 Not Found`.

The workflow intentionally does not use `enablement: true`: automatic enablement
requires a separate personal access token or GitHub App token with repository
administration permission. The normal `GITHUB_TOKEN` is not sufficient.

## Commit references

For an immutable dependency without a version tag, use the complete commit SHA:

```text
github:OWNER/rn-component-library-demo#0123456789abcdef0123456789abcdef01234567
```

## `private` does not mean inaccessible

`"private": true` prevents accidental publication to the npm registry. Git
installation still works when the user has access to the GitHub repository.
