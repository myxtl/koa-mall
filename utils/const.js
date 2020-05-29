/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-26 14:46:31
 */ 
exports.ERROR_CODE = {
    SYSTEM_ERROR: 1000,
    ACCOUNT_ALREADY_TOOK: 1001,
    LOGIN_NAME_ALREADY_TOOK: 1002,
    EMAIL_ALREADY_TOOK: 1003,
    VERIFY_SMS_CODE_FAILED: 1004,
    REQUIRE_MORE_PARAMS: 1005,
    INVALID_PARAMS: 1006,
    NO_USER: 1007,
    USER_PASSWORD_ERROR: 1008,
    TOKEN_ERROR: 1009,
    DB_ERROR: 1010,
    WX_API_ERROR: 1011,
    NO_AUTH: 1012,
    EXHAUSTED: 1013,
    NO_RES: 1014,
    ALREADY_HAD_RES: 1015,
    NO_VENDOR_CODE: 1016,
    VENDOR_CODE_ERROR: 1017,
    NOT_ENOUGH: 1018,
    IS_FULL: 1019,
    QUERY_EMPTY: 1020,
    DESC: {
        1000: '系统错误',
        1001: '手机 已占用',
        1002: '用户名已存在',
        1003: '邮箱 已占用',
        1004: '校验短信验证码过程出错',
        1005: '参数不足',
        1006: '无效参数',
        1007: '无此用户',
        1008: '用户名或密码错误',
        1009: 'Token错误',
        1010: 'sql执行出错',
        1011: '微信API错误',
        1012: '无权限执行此操作',
        1013: '已用尽',
        1014: '无此资源',
        1015: '已拥有此资源',
        1016: '无此代理码',
        1017: '代理码异常',
        1018: '数据不足',
        1019: '已满',
        1020: '查询为空'
    }
};

exports.USER_TYPE = {
    USER: 0,
    ADMIN: 1
};