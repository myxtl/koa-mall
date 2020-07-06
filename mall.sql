
-- 用户表
CREATE TABLE `user` (
	`id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '用户表id',
	`username` VARCHAR(50) NOT NULL COMMENT '用户名',
	`password` VARCHAR(50) NOT NULL COMMENT '用户密码 MD5加密',
	`email` VARCHAR(50) DEFAULT NULL,
	`phone` VARCHAR(20) DEFAULT NULL,
	`role` INT(4) NOT NULL COMMENT '角色0-管理员,1-普通用户',
	`create_time` datetime NOT NULL COMMENT '创建时间',
	`update_time` datetime NOT NULL COMMENT '最后一次更新时间',
	PRIMARY KEY (`id`),
	UNIQUE KEY `user_name_unique` (`username`) USING BTREE
) ENGINE=INNODB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8

-- 分类表
CREATE TABLE `category` (
	`id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '分类id',
	`parent_id` INT(11) DEFAULT NULL COMMENT '父级分类id',
	`name`  VARCHAR(50) DEFAULT NULL COMMENT '分类名称',
	`sort_order` INT(4) DEFAULT NULL COMMENT '排序编号',
	`create_time` datetime DEFAULT NULL COMMENT '创建时间',
	`update_time` datetime DEFAULT NULL COMMENT '更新时间',
	PRIMARY KEY (`id`)
) ENGINE=INNODB AUTO_INCREMENT=100032 DEFAULT CHARSET=utf8

-- 产品表
CREATE TABLE `product` (
	`id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '产品id',
	`category_id` INT(11) NOT NULL COMMENT '分类id',
	`name` VARCHAR(100) NOT NULL COMMENT '产品名称',
	`subtitle` VARCHAR(200) DEFAULT NULL COMMENT '产品副标题',
	`main_image` VARCHAR(500) DEFAULT NULL COMMENT '产品主图',
	`sub_images` text COMMENT '图片地址',
	`detail` text COMMENT '产品详情',
	`price` DECIMAL(20,2) NOT NULL COMMENT '价格,单位-元保留两位小数',
	`ogigin_price` DECIMAL(20,2) NOT NULL COMMENT '原价,单位-元保留两位小数',
	`stock` INT(11) NOT NULL COMMENT '库存数量',
	`status` INT(6) DEFAULT '1' COMMENT '产品状态, 1-在售  2-下架  3-删除',
	`create_time` datetime DEFAULT NULL COMMENT '创建时间',
	`update_time` datetime DEFAULT NULL COMMENT '更新时间',
	PRIMARY KEY (`id`)
) ENGINE=INNODB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8

-- 购物车表
CREATE TABLE `cart`(
  `cart_id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '购物车id',
  `user_id` INT UNSIGNED NOT NULL COMMENT '用户id',
  `product_id` INT UNSIGNED NOT NULL COMMENT '产品ID',
  `quantity` INT NOT NULL COMMENT '加入购物车商品数量',
  `price` DECIMAL(8,2) NOT NULL COMMENT '商品价格',
  `create_time` datetime NOT NULL COMMENT '加入购物车时间',
  `update_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '最后修改时间',
  PRIMARY KEY cartid(cart_id)
) ENGINE=INNODB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8

-- 收获地址表
CREATE TABLE `user_address` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`user_id` INT(11) DEFAULT NULL COMMENT '用户id',
	`name` VARCHAR(50) DEFAULT NULL COMMENT '收货人姓名',
	`phone` VARCHAR(50) DEFAULT NULL COMMENT '手机号',
	`province` VARCHAR(50) DEFAULT NULL COMMENT '省份',
	`city` VARCHAR(50) DEFAULT NULL COMMENT '城市',
	`area` VARCHAR(50) DEFAULT NULL COMMENT '区/县',
	`address` VARCHAR(200) DEFAULT NULL COMMENT '详细地址',
	`is_default` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否是默认地址  1是 0否 默认否',
	`create_time` datetime DEFAULT NULL,
	`update_time` datetime DEFAULT NULL,
	PRIMARY KEY (`id`)
) ENGINE=INNODB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8