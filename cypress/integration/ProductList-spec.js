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
  it('Should display two products in a productlist', () => {
    expect(productList.exists()).to.equal(true)
    expect(productList.find('div').hasClass('ui unstackable items')).to.equal(true)
    const product1 = productList.childAt(0)
    expect(product1.prop('id')).to.equal(1)
    expect(product1.prop('title')).to.equal('Yellow Pale')
    expect(product1.prop('description')).to.equal('On demand sand castle expertise')
    expect(product1.prop('url')).to.equal('#1')
    expect(product1.prop('votes')).to.equal('41')
    expect(product1.prop('submitterAvatarUrl')).to.equal('../../src/images/avatar.png')
    expect(product1.prop('productImageUrl')).to.equal('../../src/images/Banana-Snowboard.png')
    const product2 = productList.childAt(1)
    expect(product2.prop('id')).to.equal(2)
    expect(product2.prop('title')).to.equal('Strawberries')
    expect(product2.prop('description')).to.equal('Strawberries Forever')
    expect(product2.prop('url')).to.equal('#2')
    expect(product2.prop('votes')).to.equal('46')
    expect(product2.prop('submitterAvatarUrl')).to.equal('../../src/images/FemaleAvatar.png')
    expect(product2.prop('productImageUrl')).to.equal('../../src/images/sugarinStrawberries.png')
  })
})
