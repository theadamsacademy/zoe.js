import ProductCreateRequest from './request/product_create_request.js'
import ProductUpdateRequest from './request/product_update_request.js'
import ProductResource from './product_resource.js'

class ProductController {
  async index (req, res, next) {
    res.status(200).json([])
  }

  async create (req, res, next) {
    try {
      const productCreateRequest = new ProductCreateRequest(req.body)
      const productData = productCreateRequest.buildProductData()

      res.status(201).json(
        (new ProductResource(productData)).product
      )
    } catch (err) {
      console.log(err)
    }
  }

  async show (req, res, next) {
    res.status(200).json({})
  }

  async update (req, res, next) {
    try {
      const productUpdateRequest = new ProductUpdateRequest(req.body)

      console.log(productUpdateRequest.buildProductData())

      res.status(200).json({})
    } catch (err) {
      console.log(err)
    }
  }

  async destroy (req, res, next) {
    res.status(204).json({})
  }
}

export default new ProductController()
