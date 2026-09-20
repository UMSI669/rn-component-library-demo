# Troubleshooting

## The consumer cannot find the package

Confirm the repository and tag exist on GitHub, then remove the
consumer's `node_modules` and lockfile and run `npm install` again.

## The consumer receives old component code

A tag points to one commit forever. Build and commit the new `dist/`, create a new
tag, and update the consumer's dependency reference.

## Storybook works locally but GitHub Pages is blank

Set `STORYBOOK_BASE_PATH` to the repository path, including both slashes:
`/rn-component-library-demo/`. Before rerunning the workflow, select
**Settings → Pages → Build and deployment → Source → GitHub Actions**. The
`Get Pages site failed: Not Found` error means this one-time setup is missing.

## Storybook reports a native module error

Browser stories should use cross-platform React Native primitives. Confirm that
the exact `react-native` alias in `.storybook/main.js` still points to
`react-native-web`.

## React reports an invalid hook call

Run `npm ls react react-native` in the consumer. The library lists both as peers;
they must be supplied by the application rather than nested under the library.

## A useful next question

Try: “Trace which package supplies React to this Git-installed dependency and
explain why peerDependencies matter.”
