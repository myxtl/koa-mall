/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-26 15:32:52
 */
const mysql = require('mysql');
const { dbConfig } = require('../config/default');
const pool = mysql.createPool(dbConfig);
const db = {};

db.query = (sql, value) => {
    return new Promise((resolve, reject) => {
        pool.getConnection( (err, connection) => {
            if (err) {
                reject(err);
                return;
            }
            connection.query(sql, value, function (error, results, fields) {
                connection.release();
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    });
}
// 导出对象
module.exports = db;