import ValidationError from '../error/validation_error.js'

export default class RequestValidator {
  constructor (request) {
    this._request = request
    this._schema = null
  }

  _checkErrors () {
    const { error } = this._schema.validate(this._request, { abortEarly: false })

    if (!error) {
      return []
    }

    const errors = error.details.map(detail => detail.message)

    if (errors.length) {
      throw new ValidationError('Invalid request data', errors)
    }
  }
}
