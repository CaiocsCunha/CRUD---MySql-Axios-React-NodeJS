import express from 'express'
import userRouters from './routes/users.js'
import productRouters from './routes/products.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', userRouters)
app.use('/produtos', productRouters)

app.listen(8800)
