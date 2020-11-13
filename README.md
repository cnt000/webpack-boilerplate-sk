# BOILERPLATE Webpack 5 - for a legacy platform named Scorpion King

Follow white rabbit (official site): https://webpack.js.org/guides/getting-started/

## App has many entry points:

1. index-js.html
2. index-ts.html
3. print.html

We don't have hot reload or devserver.

## Features:

- Dynamic Import
- Typescript
- React
- ES2020
- Only modern browser (to test)

## Try with:

To test use python server:

````console
$ python3 -m http.server
$ open http://\[::\]:8000/templates/index-js.html
$ open http://\[::\]:8000/templates/index-ts.html
$ open http://\[::\]:8000/templates/print.html
````

# Browsers

````console
$ npx browserslist ">0.25%, not IE 11, not op_mini all"
````

see:
- https://jamie.build/last-2-versions
- https://babeljs.io/blog/2020/01/11/7.8.0

# Inspiring:

- https://github.com/taniarascia/webpack-boilerplate/tree/master/config
- https://github.com/chuntington/webpack-boilerplate

- https://github.com/wbkd/webpack-starter

- https://github.com/ruanyf/webpack-demos
- https://github.com/trivago/parallel-webpack
