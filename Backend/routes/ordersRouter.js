import express from 'express'
import { protectRoute } from '../middlewre/protectRoute.js'
import { makeOrder } from '../controller/ordersController.js'
const router = express.Router()

router.post( '/buy' , protectRoute , makeOrder )

export default router