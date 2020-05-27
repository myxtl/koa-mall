/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-27 16:54:43
 */ 
const jwt = require('jsonwebtoken');
function getToken(payload = {}) {
    return jwt.sign(payload, secret, { expiresIn: '24h' });
}

function getJWTPayload(token) {
    return jwt.verify(token.split(' ')[1], secret);
}

module.exports = {
    getToken,
    getJWTPayload
}