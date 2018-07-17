import React from 'react'
import {products} from './Seed'
import Product from './Product'
export default class ProductList extends React.Component {
  render () {
    const productComponents = products.map((product) => (
      <Product
        id = { product.id }
        title = { product.title }
        description = {product.description }
        url= {product.url }
        votes= {product.votes }
        submitterAvatarUrl = {product.submitterAvatarUrl}
        productImageUrl = {product.productImageUrl}
      />
      ))
      return (	
         <div className = 'ui unstackable items'>
           {productComponents}
        </div>
      )
  }
}
