var rill = require('rill')
var chain = require('@rill/chain')
var METHODS = require('@rill/http').METHODS.map(toLower)
var endsWithIndex = /index\.js$/
var endsWithJS = /\.js$/
var temp = []

/**
 * Given a webpack require context this will create a middleware that routes to every given file (omitting .js and index.js).
 */
module.exports = function routeDirectory (context, options) {
  var router = rill()
  context.keys().forEach(function (file) {
    // Load the module.
    var module = context(file)

    // Find the best path(s).
    var paths = temp.concat(
      module.paths ||
      module.path ||
      file.slice(1).replace(endsWithIndex, '').replace(endsWithJS, '')
    )

    // Attach the controllers at all provided paths.
    var len = paths.length
    for (var method in module) {
      if (!module[method] || !~METHODS.indexOf(method)) continue
      for (var i = 0; i < len; i++) {
        router[method](paths[i], module[method])
      }
    }
  })

  // Compose the dynamic router into a valid rill middleware.
  return chain(router.stack)
}

/**
 * Convert a string to lower case.
 */
function toLower (str) {
  return str.toLowerCase()
}
