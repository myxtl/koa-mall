const db = require('./db.js');

exports.getBannerList = async () => {
    const sql = "select * from banner";
    return await db.query(sql, []);
}
exports.getCategoryById = async (id) => {
    const sql = 'select * from banner where id = ?';
    return await db.query(sql, id);
}
exports.addBanner = async (name, img_url, sort_order, parent_id) => {
    const sql = 'insert into banner(name,img_url,sort_order) values(?,?,?)';
    return await db.query(sql, [name, img_url, sort_order]);
}
exports.updateBanner = async (name, sort_order, img_url, id) => {
    const sql = 'update banner set name=?, sort_order=? ,img_url=? where id=?';
    return await db.query(sql, [name, img_url, sort_order, id])
}
exports.deleteBanners = async (ids) => {
    const sql = `delete from banner where id in (${ids});`;
    return await db.query(sql, ids);
}