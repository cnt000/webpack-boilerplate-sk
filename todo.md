### todo

ProvidePlugin -> jquery?
plugins: [
new webpack.ProvidePlugin({
_: 'lodash',
}),
],

---

preset-env?
browserlist

---

https://webpack.js.org/guides/progressive-web-application/ -> impostiamo la progressive in secondo step?
https://webpack.js.org/guides/entry-advanced/ -> potremmo definire i file css direttamente qui e spegnere la build scss da node.js?

Questo serve?

```
const ASSET_PATH = process.env.ASSET_PATH || '/';
export default {
  output: {
    publicPath: ASSET_PATH,
  },

  plugins: [
    // This makes it possible for us to safely use env vars on our code
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    }),
  ],
};

```
