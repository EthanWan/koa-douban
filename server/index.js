const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
    ctx.body = '开始喽！'
})

app.listen(2333)