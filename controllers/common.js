/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-26 14:58:14
 */
const crypto = require('crypto');
const config = require('../config/oss');
const C = require('../utils/const');
const {
    Success,
    Error
} = require('../utils/message');

exports.getSign = async ctx => {
    const host = `https://${config.bucket}.${config.region}.aliyuncs.com`
    const expireTime = new Date().getTime() + config.expAfter
    const expiration = new Date(expireTime).toISOString()
    const policyString = JSON.stringify({
        expiration,
        conditions: [
            ['content-length-range', 0, config.maxSize],
            ['starts-with', '$key', config.dirPath]
        ]
    })
    const policy = Buffer.from(policyString).toString('base64')

    const signature = crypto.createHmac('sha1', config.accessKeySecret).update(policy).digest("base64");

    ctx.body = new Success({
        signature,
        policy,
        host,
        'OSSAccessKeyId': config.accessKeyId,
        'key': expireTime,
        'success_action_status': 201,
        'dirPath': config.dirPath,
    }, 'success')
}