<h1 align="center">
  <!-- Logo -->
  <img src="https://raw.githubusercontent.com/rill-js/rill/master/Rill-Icon.jpg" alt="Rill"/>
  <br/>
  @rill/webpack-router
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square" alt="API stability"/>
  </a>
  <!-- Standard -->
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/@rill/webpack-router">
    <img src="https://img.shields.io/npm/v/@rill/webpack-router.svg?style=flat-square" alt="NPM version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/@rill/webpack-router">
    <img src="https://img.shields.io/npm/dm/@rill/webpack-router.svg?style=flat-square" alt="Downloads"/>
  </a>
  <!-- Gitter Chat -->
  <a href="https://gitter.im/rill-js/rill">
    <img src="https://img.shields.io/gitter/room/rill-js/rill.svg?style=flat-square" alt="Gitter Chat"/>
  </a>
</h1>

A tool to automatically build a middleware for Rill based on a webpack require.context. Automatically routes all files required.

# Installation

```console
npm install @rill/webpack-router
```

# Example App

```js
const app = require('rill')()
const router = require('@rill/webpack-router')

// Setup all of your custom middleware (automatically routed based on file system path.)
app.use(router(require.context('./controllers', true, /\.js$/)))
```

# Example Middleware

```js
exports.get = ({ res }) => {
  // Export the methods you wish to handle (in this case a get request).
  res.body = 'hello world'
}

exports.post = ({ res }) => {
  // Handle other methods as well.
}
```

---

### Contributions

* Use `npm test` to run tests.

Please feel free to create a PR!
