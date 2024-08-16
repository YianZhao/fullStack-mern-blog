
import { type } from "os";
import { stringify } from "querystring";
import mongoose from "mongoose";

// 定义一个用户的 Schema，用于描述用户集合中的文档结构
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
      },
  
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      profilePicture: {
        type: String,
        default:
          'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      },
      isAdim:{
        type:Boolean,
        default:false
      },
}, {
    timestamps: true // 启用时间戳，Mongoose 会自动添加 createdAt 和 updatedAt 字段
});

// 将上面 Schema 定义的部分导出或连接到一个模型时使用
// 第一个参数 'User': 模型的名称，用于生成数据库集合名。
// 第二个参数 userSchema: Schema 对象，定义集合中文档的结构和规则。
const User = mongoose.model('User',userSchema)

export default User
