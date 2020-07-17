import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express();

(async () => {
  app.use('/products', (await import('../api/product/product_router.js')).default)
})()

export default app
