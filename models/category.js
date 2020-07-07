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
exports.getCategoryByName = async (name) => {
    const sql = 'select * from category where name = ?';
    return await db.query(sql, name);
}
exports.addCategory = async (name, img_url, sort_order, parent_id) => {
    const sql = 'insert into category(name,img_url,sort_order) values(?,?,?)';
    return await db.query(sql, [name, img_url, sort_order]);
}
exports.updateCategory = async (name, sort_order, img_url, id) => {
    const sql = 'update category set name=?, sort_order=? ,img_url=? where id=?';
    return await db.query(sql, [name, img_url, sort_order, id])
}
exports.deleteCategorys = async (ids) => {
    const sql = `delete from category where id in (${ids});`;
    return await db.query(sql, ids);
}