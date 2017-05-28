/**
 * Given a webpack require context this will create a middleware that routes to every given file (omitting .js and index.js).
 */
module.exports = function routeDirectorySetup (context, options) {
  var routes = Object.create(null)

  context.keys().forEach(function (file) {
    // Convert the filename to a path.
    var path = file.slice(1).replace(/(\/index)*?\.js$/, '')
    // Add the routes to the routing table.
    routes[path] = context(file)
  })

  // Return a rill compatible middleware that hooks into the routing table.
  return function routeDirectoryMiddleware (ctx, next) {
    var methods = routes[ctx.req.matchPath]
    var handler = methods && methods[ctx.req.method.toLowerCase()]
    if (typeof handler !== 'function') return next()
    return handler(ctx, next)
  }
}
