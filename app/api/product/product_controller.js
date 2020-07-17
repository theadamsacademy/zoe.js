class ProductController {
  async index (req, res, next) {
    res.status(200).json([])
  }

  async create (req, res, next) {
    res.status(201).json({})
  }

  async show (req, res, next) {
    res.status(200).json({})
  }

  async update (req, res, next) {
    res.status(200).json({})
  }

  async destroy (req, res, next) {
    res.status(204).json({})
  }
}

export default new ProductController()
