/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-26 14:41:34
 */
const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const KoaJwt = require('koa-jwt')
const error = require('./middlewares/error')
const token = require('./middlewares/token')
const {
    port,
    jwtConfig
} = require('./config/default')
const {
    logger,
    accessLogger
} = require('./utils/logs');
const swagger = require('./utils/swagger');

app.use(swagger.routes(), swagger.allowedMethods());
const { koaSwagger } = require('koa2-swagger-ui');
app.use(koaSwagger({
    routePrefix: '/swagger', // host at /swagger instead of default /docs
    swaggerOptions: {
        url: '/swagger.json', // example path to json 其实就是之后swagger-jsdoc生成的文档地址
    },
}))
// 跨域
app.use(cors({
    origin: '*',
    credentials: true
}))

app.use(bodyParser());

// logs
app.use(accessLogger());

app.on('error', err => {
    logger.error(err);
});

/* app.use(KoaJwt({
    secret: jwt.secret,
    credentialsRequired: false
}).unless({
    path: [
       '/users/login'
    ]
})); */

// middlewares
app.use(error)
// 验证token是否过期或失效
// app.use(token)

// routes
const Routers = require('./routes');
app.use(Routers.routes()).use(Routers.allowedMethods());

app.listen(port, () => console.log(`Running on port: ${port}`))

module.exports = app