const db = require('./db.js');

exports.getProductList = async (offset = 0, rows = 10) => {
    let sql = "select * from product ";
    if (rows != 0) {
        sql += "limit " + offset + "," + rows;
    }
    return await db.query(sql, []);
}

exports.getProductLength = async () => {
    const sql = "select * from product";
    return await db.query(sql, []);
}

exports.getProductById = async id => {
    const sql = "select * from product where id = ?";
    return await db.query(sql, id);
}