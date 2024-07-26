import express from 'express'
import {Login, Logout, SignUp } from '../controller/AuthController.js'
import { protectRoute } from '../middlewre/protectRoute.js'

const router = express.Router()
router.post('/signup' , SignUp)
router.post('/login' , Login)
router.post('/logout' , Logout)

export default router