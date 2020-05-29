/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-26 14:45:58
 */ 
const C = require('./const');

function Error(errorCode, data, message) {
    // this.code = 500;
    this.code = errorCode;
    this.data = data;
    this.msg = message || C.ERROR_CODE.DESC[errorCode];
}

function Success(data, message) {
    this.code = 0;
    this.data = data;
    this.msg = message;
}

module.exports = {
    Error,
    Success
};