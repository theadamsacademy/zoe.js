import { EventEmitter } from 'events'
import ProductCreateRequest from './request/product_create_request.js' //eslint-disable-line
import ProductUpdateRequest from './request/product_update_request.js' //eslint-disable-line

class ProductService extends EventEmitter {
  async findProducts () {
    return []
  }

  /** @param {string} id */
  async findProduct (id) {
    return {}
  }

  /** @param {string[]} ids */
  async findProductsByIds (ids) {
    return []
  }

  /** @param {ProductCreateRequest} productCreateRequest */
  async createProduct (productCreateRequest) {
    return {}
  }

  /**
     * @param {string} id
     * @param {ProductUpdateRequest} productUpdateRequest
     */
  async updateProduct (id, productUpdateRequest) {
    return {}
  }

  /** @param {string} id */
  async deleteProduct (id) {
    return {}
  }
}

export default new ProductService()
