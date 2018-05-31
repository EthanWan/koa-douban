const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const { resolve } = require('path')

// koa 原本就支持pug
app.use(views(resolve(__dirname, './views'), {
    extension: 'pug'
}))

app.use(async (ctx, next) => {
    await ctx.render('index', {
        you: 'ethan',
        me: 'Ethan'
    })
})

app.listen(2333)