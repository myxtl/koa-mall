/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-27 16:58:07
 */
const db = require('./db');

exports.login = async (userName, password) => {
    const sql = 'select * from users where userName = ? and password = ?';
    return await db.query(sql, [userName, password]);
}