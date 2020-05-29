/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-26 14:41:34
 */
const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const logger = require('koa-logger')
const KoaJwt = require('koa-jwt')
const {
    staticDir,
    jwt
} = require('./config/default')
const error = require('./middlewares/error')
const token = require('./middlewares/token')
// 跨域
app.use(cors());

app.use(bodyParser());

// error handler


// middlewares
app.use(error)
// 验证token是否过期或失效
// app.use(token)

// logger
app.use(logger())
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 
// routes
const Routers = require('./routes');
app.use(Routers.routes()).use(Routers.allowedMethods());

app.use((ctx, next) => {
    return next().catch((err) => {
        if (err.status === 401) {
            ctx.status = 401;
            ctx.body = 'Protected resource, use Authorization header to get access\n';
        } else {
            throw err;
        }
    })
})


app.use(KoaJwt({
    secret: jwt.secret
}).unless({
    path: [/^\/users\/login/]
}));


app.listen(5555, () => console.log('server running'))

module.exports = app