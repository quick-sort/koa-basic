# koa-basic

[![NPM version][npm-image]][npm-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]


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

[npm-image]: https://img.shields.io/npm/v/koa-basic.svg?style=flat-square
[npm-url]: https://npmjs.org/package/koa-basic
[license-image]: http://img.shields.io/npm/l/koa-basic.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/koa-basic.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/koa-basic
