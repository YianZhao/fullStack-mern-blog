import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

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
app.use(express.json());


// 启动服务器
app.listen(3000, () => {
  console.log("server is running on port 3000!");
});


//测试
app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({
        succes:false,
        statusCode,
        message
    })
})