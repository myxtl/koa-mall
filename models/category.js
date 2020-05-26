/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-26 16:06:13
 */ 
const db = require('./db.js');

exports.getCategoryList = async () => {
    const sql = "select * from category";
        return await db.query(sql, []);
}
exports.getCategoryById = async (id) => {
    const sql = 'select * from category where categoryId = ?';
    return await db.query(sql, id);
}