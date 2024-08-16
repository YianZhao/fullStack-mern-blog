import express from 'express'
import { test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

//测试
router.get('/test',test)
router.put('/update/:userId',verifyToken,updateUser)

export default router