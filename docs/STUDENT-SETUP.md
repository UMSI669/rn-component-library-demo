The goal is to create one shared set of components that has two uses:

1. Storybook presents and documents the components in a browser.
2. React Native applications install and use those same components directly.

There is no export-from-Figma or copy-and-paste step between them.
The components you design are the components the app uses!

Working examples:

- [Component library repository](https://github.com/UMSI669/rn-component-library-demo)
- [Published Storybook](https://umsi669.github.io/rn-component-library-demo/)
- [Separate Expo consumer](https://github.com/UMSI669/rn-component-library-consumer)

Use the examples as a map. Give your own library a different name, visual
language, tokens, and components. All authored source in this walkthrough is
ordinary JavaScript.

## 1. Decide your names

Write down these values before changing configuration:

```text
OWNER=your GitHub username or organization
LIBRARY_REPO=your component-library repository
PACKAGE_NAME=the name applications will import
CONSUMER_REPO=your separate Expo application repository
TAG=v1.0.0
```

Using the same value for `LIBRARY_REPO` and `PACKAGE_NAME` usually makes a class
exercise easier to follow.

Create two independent repositories. Do not place one inside the other and do
not configure them as workspaces.

## 2. Build the library repository

The library repository needs four layers:

```text
src/components/       React Native components
src/tokens.js          shared design decisions
src/index.js           supported public imports
dist/                  built package consumed by applications
```

Start with two or three small components. Prefer semantic props such as
`status="warning"` or `variant="primary"` over many arbitrary color and style
props.

Keep the token set small: a few colors, spacing values, and corner radii are
enough to demonstrate that repeated decisions can live in one place.

Reference the demo's
[`src/index.js` lines 1–16](https://github.com/UMSI669/rn-component-library-demo/blob/main/src/index.js#L1-L16)
for the public export boundary.

### Package configuration

Your root `package.json` should:

- point `main`, `module`, `react-native`, `types`, and `exports` at `dist/`;
- include `dist/` in the packaged files;
- list React and React Native as peer dependencies;
- contain scripts that build JavaScript and editor declarations; and
- use `"private": true` if you do not intend to publish to npm.

See the demo's
[`package.json` entry points](https://github.com/UMSI669/rn-component-library-demo/blob/main/package.json#L8-L25),
[`scripts`](https://github.com/UMSI669/rn-component-library-demo/blob/main/package.json#L34-L44),
and [`peerDependencies`](https://github.com/UMSI669/rn-component-library-demo/blob/main/package.json#L46-L49).

React and React Native can also appear in `devDependencies`: the library needs
them to run its own examples. Their presence in `peerDependencies` tells an
installed copy to use the application's framework instances.

The `.d.ts` files in `dist/` are generated editor metadata. Students do not
write or edit them. JSDoc comments in the JavaScript source provide the
information used to create them.

> Suggested AI prompt: “Review this package.json as an installable React Native
> JavaScript library. React and React Native must be peers, the build must
> produce ESM, CommonJS, and editor declarations in dist, and the package will be installed from a
> Git tag rather than npm. Explain only changes that are necessary.”

## 3. Add browser-based Storybook

The components should continue importing from `react-native`. Storybook can
render them in a browser by mapping that package to `react-native-web` in its
Vite configuration.

See
[`.storybook/main.js` lines 4–27](https://github.com/UMSI669/rn-component-library-demo/blob/main/.storybook/main.js#L4-L27).
The `base` value is important when Storybook will live below a repository path
such as `/my-component-library/`.

Create stories that help someone make a decision about a component:

- use controls for meaningful props;
- show useful states and backgrounds;
- use a phone viewport when width matters;
- show callback activity;
- include accessibility feedback; and
- demonstrate how a controlled component receives its value from a parent.

The demo's controlled example is in
[`ChoiceChips.stories.jsx` lines 12–69](https://github.com/UMSI669/rn-component-library-demo/blob/main/src/components/ChoiceChips.stories.jsx#L12-L69).

Run Storybook locally:

```sh
npm install
npm run storybook
```

Before sharing the repository, run:

```sh
npm run verify
npm run build-storybook
npm pack --dry-run
```

The package inspection should contain `dist/`, declarations, `package.json`, and
basic documentation—not Storybook or the complete development toolchain.

> Suggested AI prompt: “Given this component and its props, propose a small set
> of Storybook stories that demonstrate real design decisions. Use JavaScript
> and JSDoc, plus useful controls, accessibility, and one controlled example.
> Avoid creating dozens of nearly identical stories.”

## 4. Commit built package output and create a tag

This approach commits `dist/`. That makes Git installation predictable because
the tagged commit already contains the JavaScript and declarations an app needs.

After the project checks pass:

```sh
git add .
git commit -m "Create component library"
git push origin main
git tag v1.0.0
git push origin v1.0.0
```

A tag identifies one exact commit. Do not move an existing tag when the library
changes; create `v1.0.1`, `v1.1.0`, or another new version.

## 5. Deploy Storybook to GitHub Pages

Copy or adapt the official-actions workflow shown in
[`pages.yml` lines 1–45](https://github.com/UMSI669/rn-component-library-demo/blob/main/.github/workflows/pages.yml#L1-L45).
Set `STORYBOOK_BASE_PATH` to your repository name:

```yaml
STORYBOOK_BASE_PATH: /YOUR_LIBRARY_REPO/
```

### Required one-time manual step

The workflow cannot perform this step with its normal GitHub token:

1. Open the library repository on GitHub.
2. Select **Settings**.
3. Select **Pages** in the left navigation.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Return to **Actions** and rerun the Pages workflow if it previously failed.

If the Pages option is missing, ask the repository or organization administrator
to enable GitHub Pages. The error `Get Pages site failed: Not Found` means the
Pages site has not been enabled yet; it does not mean the Storybook build failed.

The resulting URL usually has this form:

```text
https://OWNER.github.io/LIBRARY_REPO/
```

> Suggested AI prompt: “My configure-pages action reports ‘Get Pages site
> failed: Not Found.’ Explain the one-time GitHub settings step for an
> organization-owned repository. Do not suggest changing my Storybook code
> unless the Pages site is already enabled.”

## 6. Build the separate Expo consumer

Create the application outside the library repository:

```sh
npx create-expo-app@latest YOUR_CONSUMER_REPO --template blank
cd YOUR_CONSUMER_REPO
npx expo install react-native-safe-area-context
```

Install the library tag:

```sh
npm install github:OWNER/LIBRARY_REPO#v1.0.0
```

The dependency should appear like the demo's
[`package.json` lines 21–28](https://github.com/UMSI669/rn-component-library-consumer/blob/main/package.json#L21-L28).

Import only from the package name:

```tsx
import { DemoButton, StatusCard, ChoiceChips } from 'YOUR_PACKAGE_NAME';
```

Do not import from the library's `src/`, `dist/`, or individual file paths. The
consumer should know the public package API, not the library's internal folders.

The demo consumer shows package imports and state ownership in
[`App.js` lines 8–30](https://github.com/UMSI669/rn-component-library-consumer/blob/main/App.js#L8-L30),
and current safe-area usage in
[`App.js` lines 32–75](https://github.com/UMSI669/rn-component-library-consumer/blob/main/App.js#L32-L75).

Run the application checks:

```sh
npm run verify
npm run start
```

## 7. Keep the two delivery paths straight

The same source has two destinations:

```text
component source ── build ──> dist/ in a Git tag ── npm install ──> Expo app
        │
        └── Storybook build ──> static files ──> GitHub Pages website
```

GitHub Pages is for people browsing the documentation. npm installs the package
from the Git repository and tag, not from the Pages website.

> Suggested AI prompt: “Explain the difference between the GitHub repository,
> its tagged package contents, and its GitHub Pages Storybook site. Use this
> dependency string as the example: github:OWNER/LIBRARY_REPO#v1.0.0.”

## 8. Release a change

When a component changes:

1. Run the library's project checks and rebuild `dist/`.
2. Commit both source and generated `dist/` changes.
3. Create and push a new tag.
4. Update the consumer to the new tag.
5. Run `npm install` in the consumer so its lockfile records the new commit.
6. Run the consumer and confirm the changed component appears.

If the consumer still shows old code, inspect its dependency string and
lockfile. An existing tag continues to identify its original commit.

> Suggested AI prompt: “My Expo app installs a React Native library from a Git
> tag but still shows the old component. Give me a short diagnostic checklist
> covering dist, commits, tags, package-lock.json, and node_modules.”

## Completion checklist

- [ ] The library and consumer are separate repositories.
- [ ] Components use shared tokens and have a deliberate public API.
- [ ] React and React Native are peer dependencies of the library.
- [ ] `dist/` contains JavaScript and generated editor declarations.
- [ ] Storybook builds locally from the actual React Native components.
- [ ] GitHub Pages is manually enabled and the workflow succeeds.
- [ ] The consumer dependency names a Git tag or complete commit SHA.
- [ ] The consumer imports only from the package name.
- [ ] The consumer visibly responds to component callbacks.
- [ ] GitHub Pages is understood as documentation—not the install source.
