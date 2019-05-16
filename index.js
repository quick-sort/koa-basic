const auth = require('basic-auth')
module.exports = async function(ctx, next) {
  let basicAuth = auth(ctx)
  if (basicAuth) {
    ctx.basicAuth = basicAuth
  }
  await next()
}
