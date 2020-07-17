import Joi from 'joi'
import RequestValidator from '../../../service/request_validator.js'

export default class ProductUpdateRequest extends RequestValidator {
  constructor (request) {
    super(request)

    this._schema = Joi.object().min(1).keys({
      name: Joi.string().min(3),
      price: Joi.number().positive().integer()
    })

    this._checkErrors()
  }

  /** @returns {null|string} */
  get name () { return this._request.name }

  /** @returns {null|number} */
  get price () { return this._request.price }

  buildProductData () {
    const data = {}

    this.name && (data.name = this.name)
    this.price && (data.price = this.price)

    return data
  }
}
