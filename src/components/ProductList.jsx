import React from 'react'
import {seedProducts} from './Seed'
import Product from './Product'
export default class ProductList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      products: []
    }
    this.handleProductUpVote = this.handleProductUpVote.bind(this)
  }

  componentDidMount () {
    this.setState({
      products: seedProducts
    })
  }

  handleProductUpVote (productId) {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({ }, product, {
          votes: product.votes + 1 })
      } else {
        return product
      }
    })
    this.setState({
      products: nextProducts
    })
  }

  render () {
    const products = seedProducts.sort((a, b) => (
      a.votes - b.votes
    ))

    const productComponents = products.map((product) => (
      <Product
        key = { 'product-' + product.id }
        id = { product.id }
        title = { product.title }
        description = {product.description }
        url= {product.url }
        votes= {product.votes }
        submitterAvatarUrl = {product.submitterAvatarUrl}
        productImageUrl = {product.productImageUrl}
        onVote = {this.handleProductUpVote}
      />
    ))
    return (
      <div className = 'ui-unstackable-items'>
        {productComponents}
      </div>
    )
  }
}
