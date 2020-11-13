### todo

---

5. differenze con SK - dove mette le img prima di pusharle in CDN? directory corrette?

6. importare in SK

7. check bene grandezza del bundle variando la query browserlist e esgtrarre da data studio le percentuali dei browsers

8. diff con tutti i readme per farlo piu carino

---

class properties... ???

window.$ come poter rimuovere window?

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
