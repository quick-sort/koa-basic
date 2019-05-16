# koa-basicauth
Basic auth header parse for koa


# Usage
```
npm install koa-basic

```

```
var basicAuth = require('koa-basic')

app.use(basicAuth)
app.use(async (ctx, next) => {
    const { name, pass } = ctx.basicAuth
    ...
})
```
