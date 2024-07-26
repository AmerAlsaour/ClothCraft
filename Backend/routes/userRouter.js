import express from 'express'
import { protectRoute } from '../middlewre/protectRoute.js'
import { getAllOrders } from '../controller/UserController.js'

const router = express.Router()

router.get( '/all' , protectRoute , getAllOrders )

export default router