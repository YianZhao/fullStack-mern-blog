import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// 加载环境变量
dotenv.config();

// 连接到 MongoDB
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("mongoDB is connected");
  })
  .catch(err => {
    console.log(err);
  });

const app = express();

// 启动服务器
app.listen(3000, () => {
  console.log("server is running on port 3000!");
});
