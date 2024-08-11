
import { type } from "os";
import { stringify } from "querystring";
import mongoose from "mongoose";

// 定义一个用户的 Schema，用于描述用户集合中的文档结构
const userSchema = new mongoose.Schema({
    userName: {
        type: String, // 定义 userName 字段的类型为字符串
        require: true, // 该字段为必填项
        unique: true, // 该字段的值必须唯一，不能重复
    },
    email: {
        type: String, // 定义 email 字段的类型为字符串
        require: true, // 该字段为必填项
        unique: true, // 该字段的值必须唯一，不能重复
    },
    password: {
        type: String, // 定义 password 字段的类型为字符串
        require: true, // 该字段为必填项
    }
}, {
    timestamps: true // 启用时间戳，Mongoose 会自动添加 createdAt 和 updatedAt 字段
});

// 将上面 Schema 定义的部分导出或连接到一个模型时使用
// 第一个参数 'User': 模型的名称，用于生成数据库集合名。
// 第二个参数 userSchema: Schema 对象，定义集合中文档的结构和规则。
const User = mongoose.model('User',userSchema)

export default User
