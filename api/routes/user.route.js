import express from 'express'
import { test } from '../controllers/user.controller.js';

const router = express.Router();

//测试
router.get('/test',test)

export default router