import Joi from 'joi'
import RequestValidator from '../../../service/request_validator.js'

export default class ProductCreateRequest extends RequestValidator {
  constructor (request) {
    super(request)

    this._schema = Joi.object().keys({
      id: Joi.string().required().min(5),
      name: Joi.string().required().min(3),
      price: Joi.number().required().positive().integer()
    })

    this._checkErrors()
  }

  /** @returns {string} */
  get id () { return this._request.id }

  /** @returns {string} */
  get name () { return this._request.name }

  /** @returns {number} */
  get price () { return this._request.price }

  buildProductData () {
    const data = {
      id: this.id,
      name: this.name,
      price: this.price
    }

    return data
  }
}
