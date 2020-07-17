export default class ProductResource {
  constructor (productData) {
    this._product = {
      id: productData.id,
      name: productData.name,
      price: productData.price
    }
  }

  get product () { return this._product }
}
