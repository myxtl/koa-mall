/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-26 14:56:52
 */ 
const path = require('path');

module.exports = {
    port: 3000,
    staticDir: path.resolve('../public'),
    dbConfig: {
        database: 'mall',
        user: 'root',
        password: '123456',
        port: '3306',
        host: '127.0.0.1'
    }
}