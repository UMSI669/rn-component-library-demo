# Architecture

## One repository, two outputs

The repository root is the installable package. `src/index.js` is its public
door. `tsup` builds that door into ESM, CommonJS, and source maps under `dist/`.
JSDoc comments generate editor declarations without requiring students to write
TypeScript.

Storybook is a documentation application built from the same source. Its Vite
configuration aliases `react-native` to `react-native-web`; the library source
does not need web-specific versions of its components.

## Dependency boundary

React 19.2 and React Native 0.86 are development dependencies so this repository
can render its own examples. They are also peer dependencies so an installed
copy uses the consuming application's React and React Native instances.

This avoids two React trees and keeps native framework ownership with the app.

## Public API and tokens

Only exports from `src/index.js` are supported. The components accept semantic
choices such as `status="warning"`; tokens implement those choices consistently.
The Storybook-only styling anti-example is deliberately not exported.

## Why `dist/` is checked in

Git dependencies do not receive files that exist only on a developer's machine.
This project commits `dist/`, so a tagged commit already contains runnable code
and declarations. A consumer does not need Storybook or the build
toolchain to install it.

`prepack` rebuilds `dist/` before package inspection. Before making a release
commit, run `npm run verify` and confirm the generated `dist/` changes are included.

## Selected compatibility baseline

- Node 22.13+
- React 19.2.3
- React Native 0.86.3
- React Native Web 0.21.2
- Storybook 10.6.0 with Vite 8.3.0
- JavaScript with JSDoc, plus tsup 8.5.1

TypeScript is a build-only utility that converts JSDoc into `.d.ts` editor
metadata. Students do not author TypeScript files or TypeScript syntax.

These versions align the library's development environment with Expo SDK 57 in
the separate consumer project. No Metro workaround is needed because consumers
receive ordinary built JavaScript with React Native left external.
