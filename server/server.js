import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDatabase from './config/MongoDb.js'
import ImportData from './DataImport.js'
import productRoute from './Routes/ProductRouter.js'
import { errorHandler, notFound } from './Middleware/Errors.js'
import userRouter from './Routes/UserRoutes.js'
import orderRouter from './Routes/OrderRouter.js'

dotenv.config()
connectDatabase()

const app = express()
app.use(express.json())
const PORT = process.env.PORT
app.use(cors())

// API
app.use('/api/import', ImportData)
app.use('/api/products', productRoute)
app.use('/api/users', userRouter)
app.use('/api/orders', orderRouter)

// ERROR HANDLER
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`server running on port ${PORT}...`))

export default app
