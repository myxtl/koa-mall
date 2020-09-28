/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-27 16:58:07
 */
const db = require('./db');

exports.login = async (username, password) => {
    const sql = 'select * from users where username = ? and password = ?';
    return await db.query(sql, [username, password]);
}

exports.register = async (username, password) => {
    const sql = `insert into users values(null, ?, ?, null)`;
    return await db.query(sql, [username, password])
}