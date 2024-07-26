import express from 'express'
import { protectRoute } from '../middlewre/protectRoute.js'
import { getOrders, makeOrder } from '../controller/ordersController.js'
const router = express.Router()

router.post( '/buy' , protectRoute , makeOrder )
router.get( '/getorders' , protectRoute , getOrders )

export default router