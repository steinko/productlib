import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Product from '../../src/components/Product'

configure({ adapter: new Adapter() })

describe('unit test Product', () => {
  var product
  beforeEach(() => {
    product = shallow(<Product productImageUrl ='productImage' url = '#' votes= '48' title = 'Snow Board' description = 'Cool Snow Board' submitterAvatarUrl = 'Avatar' />)
  })
  it('should esit a div element with class images and a', () => {
    expect(product.find('div.image').hasClass('image')).to.equal(true)
    expect(product.instance().props.productImageUrl).to.equal('productImage')
  })
  it('should exist a div element with class item in productlist', () => {
    expect(product.find('div.item').hasClass('item')).to.equal(true)
  })
  it('shoulcheck div element with class middel aligned content', () => {
    const MACelement = product.find('div.middel-aligned-content')
    expect(MACelement.hasClass('middel-aligned-content')).to.equal(true)
    const header = MACelement.find('div.header')
    expect(header.hasClass('header')).to.equal(true)
    const a = header.find('a')
    expect(a.text()).to.equal('Url')
    expect(product.instance().props.url).to.equal('#')
    expect(a.find('i.large-caret-up-icon').hasClass('large-caret-up-icon')).to.equal(true)
    expect(product.instance().props.votes).to.equal('48')
  })
  it('should display short decription for div element with class decription', () => {
    const description = product.find('div.description')
    expect(description.hasClass('description')).to.equal(true)
    expect(description.find('a').text()).to.equal('Snow Board')
    expect(product.instance().props.title).to.equal('Snow Board')
  })
  it('should display long decription for div element with class decription', () => {
    const description = product.find('div.description')
    expect(description.hasClass('description')).to.equal(true)
    expect(description.find('p').text()).to.equal('Cool Snow Board')
    expect(product.instance().props.description).to.equal('Cool Snow Board')
  })
  it('should display extra for div element with class extra', () => {
    const element = product.find('div.extra')
    expect(element.hasClass('extra')).to.equal(true)
    expect(element.find('span').text()).to.equal('Submitted by:')
    expect(product.instance().props.submitterAvatarUrl).to.equal('Avatar')
  })
  it('shoul diplay a image in element div with class ui-avatar-image inside class extra', () => {
    const element = product.find('div.extra')
    expect(element.find('img.ui-avatar-image').hasClass('ui-avatar-image')).to.equal(true)
  })
  it('shoul diplay a image in element div with class ui-avatar-image inside class extra', () => {
    const element = product.find('div.extra')
    expect(element.find('img.ui-avatar-image').hasClass('ui-avatar-image')).to.equal(true)
  })
})
