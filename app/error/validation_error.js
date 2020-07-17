export default class ValidationError extends Error {
  constructor (message, metadata) {
    super(message)

    this.name = this.constructor.name
    this.status = 422
    this.metadata = metadata
  }
}
