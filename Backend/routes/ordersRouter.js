import express from 'express'
import { protectRoute } from '../middlewre/protectRoute.js'
import { getOrderDetails, getOrders, makeOrder } from '../controller/ordersController.js'
const router = express.Router()

router.post( '/buy' , protectRoute , makeOrder )
router.get( '/getorders' , protectRoute , getOrders )
router.get( '/getorders/:id' , protectRoute , getOrderDetails )

export default router