import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()

app.use(express.json());

(async () => {
  app.use('/products', (await import('../api/product/product_router.js')).default)
})()

export default app
