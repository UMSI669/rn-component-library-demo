# Create your own library

1. Start with one useful component and a small token file.
2. Export the supported component from `src/index.js` and describe its props
   with JSDoc.
3. Keep React and React Native in `peerDependencies`.
4. Build JavaScript and declarations into `dist/`.
5. Create stories from the real source, using controls to explore meaningful API
   choices.
6. Build Storybook as a static site and publish that site separately from the
   installable package.
7. Commit the updated build output, then create a version tag.
8. Install that tag in a separate application and import only from the package name.

Ask of every prop: does it express a reusable design decision, or does it let
each screen silently create a new design? The Storybook “Styling rabbit hole”
example makes that contrast visible.

Suggested prompt: “Help me turn these three repeated interface patterns into a
small semantic component API. Ask before adding arbitrary style overrides.”

References:

- [React Native components](https://reactnative.dev/docs/components-and-apis)
- [Storybook for React](https://storybook.js.org/docs/get-started/frameworks/react-vite)
- [npm package.json fields](https://docs.npmjs.com/cli/configuring-npm/package-json)
