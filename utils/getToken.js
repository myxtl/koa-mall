/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-27 16:54:43
 */ 
const jwt = require('jsonwebtoken');
const config = require('../config/default');
function getToken(payload = {}) {
    return jwt.sign(payload, config.jwt.secret, { expiresIn: '24h' });
}

function getJWTPayload(token) {
    return jwt.verify(token.split(' ')[1], config.jwt.secret);
}

module.exports = {
    getToken,
    getJWTPayload
}