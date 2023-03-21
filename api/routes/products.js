import express from 'express'
import { getProducts } from '../controllers/product.js'

const productRouter = express.Router()

productRouter.get('/produtos', getProducts)

export default productRouter
