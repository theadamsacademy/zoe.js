import express from 'express'
import productController from './product_controller.js'

const router = express.Router()

router.get('/', productController.index)
router.post('/', productController.create)
router.get('/:id', productController.show)
router.patch('/:id', productController.update)
router.delete('/:id', productController.destroy)

export default router
