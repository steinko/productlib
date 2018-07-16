import {shallow, configure} from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'

import ProductList from '../../src/components/ProductList'
import Product from '../../src/components/Product'

configure({ adapter: new Adapter() })

describe('ProductList unit testing', () => {
  var productList
  beforeEach(() => {
    productList = shallow(<ProductList />)
  })
  it('Should display one product in a productlist', () => {
    expect(productList.exists()).to.equal(true)
    expect(productList.find('div').hasClass('ui unstackable items')).to.equal(true)
    const product = productList.childAt(0)
    expect(product).to.have.length(1)
    expect(product.prop('id')).to.equal(1)
    expect(product.prop('title')).to.equal('Yellow Pale')
    expect(product.prop('description')).to.equal('On demand sand castle expertise')
    expect(product.prop('url')).to.equal('#')
    expect(product.prop('votes')).to.equal(41)
    expect(product.prop('submitterAvatarUrl')).to.equal('../../images/avatar.png')
    expect(product.prop('productImageUrl')).to.equal('../../images/Banana-Snowboard.png')
  })
})
