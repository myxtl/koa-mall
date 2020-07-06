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
    const sql = 'select * from category where id = ?';
    return await db.query(sql, id);
}
exports.addCategory = async (name, sort_order, parent_id) => {
    const sql = 'insert into category(name,sort_order,parent_id) values(?,?,?)';
    return await db.query(sql, [name, sort_order, parent_id]);
}
exports.updateCategory = async (name, sort_order, id) => {
    const sql = 'update category set categoryName=?, categoryImages=? where id=?';
    return await db.query(sql, [name, sort_order, id])
}
exports.deleteCategorys = async (ids) => {
    const sql = `delete from category where id in (${ids});`;
    return await db.query(sql, ids);
}