# 📦 Webpack 5 Boilerplate - for a legacy platform named Scorpion King

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Webpack 5 boilerplate super modern feature for also legacy projects (sdifferent bundle imported in HTML manually)

Following white rabbit (official site): https://webpack.js.org/guides/getting-started/

## Installation

Clone this repo and npm install.

```bash
npm i
```

## Usage

### Development

```bash
npm watch
```

You can view the development server at `localhost:8080`.

### Production build

```bash
npm run build
```

### Format and linting

```bash
npm run format:lint
```

## App has many example entry points:

1. **index-js.html**

    Example Js file entrypoint with dynamic imports

2. **index-ts.html**

    Example Ts file entrypoint with dynamic imports

3. **index-react.html**

    Example Js file entrypoint with React and Lazy components


NOTE:

We don't have hot reload or devserver.

## Features:

- Dynamic Import
- Typescript
- React
- ES2020
- Only modern browser (to test)
- Jest

## Try with:

To test use python server:

````console
$ python3 -m http.server
$ open http://\[::\]:8000/templates/index-js.html
$ open http://\[::\]:8000/templates/index-ts.html
$ open http://\[::\]:8000/templates/index-react.html
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

## Author

- Edoardo Gargano

This project is open source and available under the [MIT License](LICENSE).
