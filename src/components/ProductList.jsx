import React from 'react'
import {products} from './Seed'
export default class ProductList extends React.Component {
  render () {
    const product = products[0]
    return (<div className = 'ui unstackable items'>
      <Product
        id = { product.id }
        title = { product.title }
        description = {product.description }
        url= {product.url }
        votes= {product.votes }
        submitterAvatarUrl = {product.submitterAvatarUrl}
        productImageUrl = {product.productImageUrl}
      />
    </div>)
  }
}
