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
  
  xit('Should display two products in a productlist', () => {
    expect(productList.exists()).to.equal(true)
    expect(productList.find('div').hasClass('ui unstackable items')).to.equal(true)
    const product1 = productList.childAt(0)
    expect(product1.prop('id')).to.equal(1)
    expect(product1.prop('title')).to.equal('Yellow Pale')
    expect(product1.prop('description')).to.equal('On demand sand castle expertise')
    expect(product1.prop('url')).to.equal('#1')
    expect(product1.prop('votes')).to.equal(41)
    expect(product1.prop('submitterAvatarUrl')).to.equal('../../src/images/avatar.png')
    expect(product1.prop('productImageUrl')).to.equal('../../src/images/Banana-Snowboard.png')
    const product2 = productList.childAt(1)
    expect(product2.prop('id')).to.equal(2)
    expect(product2.prop('title')).to.equal('Strawberries')
    expect(product2.prop('description')).to.equal('Strawberries Forever')
    expect(product2.prop('url')).to.equal('#2')
    expect(product2.prop('votes')).to.equal(46)
    expect(product2.prop('submitterAvatarUrl')).to.equal('../../src/images/FemaleAvatar.png')
    expect(product2.prop('productImageUrl')).to.equal('../../src/images/sugarinStrawberries.png')
   })
  
   it('Should call handleProductUpVoute function when on click in Product' , () => {
    const productiListInstance = productList.instance()
    cy.spy(productiListInstance,"handleProductUpVote")
    const product = shallow(<Product onVote = {productiListInstance.handleProductUpVote} />)
    product.find('div.header').find('a').simulate('click')
    expect(productiListInstance.handleProductUpVote).to.be.called
   })
   
   xit('Should increment the vote for the product' , ()=> {
    const productiListInstance = productList.instance()
    const product = shallow(<Product id = {3} onVote = {productiListInstance.handleProductUpVote} votes = {1} />)
    productiListInstance.handleProductUpVote(3)
    const  productInstance = product.instance()  
    expect(productInstance.props.votes).to.equal(2)   
   })
   
   it('Should create a undefined state for products' , ()=> {
    expect(productList.state.products).to.equal(undefined)
   })
   
   xit('Should increment products votes ' , ()=> {
    const product = productList.childAt(0)
    product.find('div.header').find('a').simulate('click')
    expect( product.find('div.header').text()).to.equal('42')
   })
})