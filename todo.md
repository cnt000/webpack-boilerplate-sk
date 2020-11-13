### todo

---
3. Diff con
- https://github.com/chuntington/webpack-boilerplate
- https://github.com/wbkd/webpack-starter

4. mettere jquery:
ProvidePlugin -> jquery?
plugins: [
new webpack.ProvidePlugin({
_: 'lodash',
}),
],

5. differenze con SK

6. importare in SK

7. check bene grandezza del bundle variando la query browserlist e esgtrarre da data studio le percentuali dei browsers


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



optimization: {
		minimize: !DevMode,
		minimizer: [
			new TerserPlugin({
				parallel: true,
				test: /\.js(\?.*)?$/i
			})
		],
		splitChunks: {
			cacheGroups: {
				vendors: {
					chunks: 'all',
					enforce: true,
					test: /[\\/]node_modules[\\/]/
				}
			}
		}
	},
