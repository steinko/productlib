import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Product from '../../src/components/Product'

configure({ adapter: new Adapter() })

describe('unit test Product', () => {
  var product1
  var product2
  before(() => {
    product1 = shallow(<Product productImageUrl ='productImage' url = '#1' votes= '41' title = 'Snow Board' description = 'Cool Snow Board' submitterAvatarUrl = 'Avatar' />)
    product2 = shallow(<Product productImageUrl ='coolproductImage' url = '#2' votes= '46' title = 'Strawberries' description = 'Strawberries Forever' submitterAvatarUrl = 'FemailAvatar' />)
  })
  it('should esit a div element with class images and a', () => {
    expect(product1.find('div.image').hasClass('image')).to.equal(true)
    expect(product1.instance().props.productImageUrl).to.equal('productImage')
    expect(product2.instance().props.productImageUrl).to.equal('coolproductImage')
  })
  it('should exist a div element with class item in productlist', () => {
    expect(product1.find('div.item').hasClass('item')).to.equal(true)
  })
  it('shoulcheck div element with class middel aligned content', () => {
    const MACelement = product1.find('div.middel-aligned-content')
    expect(MACelement.hasClass('middel-aligned-content')).to.equal(true)
    const header = MACelement.find('div.header')
    expect(header.hasClass('header')).to.equal(true)
    const a = header.find('a')
    expect(a.text()).to.equal('Url')
    expect(product1.instance().props.url).to.equal('#1')
    expect(product2.instance().props.url).to.equal('#2')
    expect(a.find('i.large-caret-up-icon').hasClass('large-caret-up-icon')).to.equal(true)
    expect(product1.instance().props.votes).to.equal('41')
    expect(product2.instance().props.votes).to.equal('46')
  })
  it('should display short decription for div element with class decription', () => {
    const description1 = product1.find('div.description')
    expect(description1.hasClass('description')).to.equal(true)
    expect(description1.find('a').text()).to.equal('Snow Board')
    const description2 = product2.find('div.description')
    expect(description2.find('a').text()).to.equal('Strawberries')
    expect(product1.instance().props.title).to.equal('Snow Board')
    expect(product2.instance().props.title).to.equal('Strawberries')
  })
  it('should display long decription for div element with class decription', () => {
    const description = product1.find('div.description')
    expect(description.hasClass('description')).to.equal(true)
    expect(description.find('p').text()).to.equal('Cool Snow Board')
    const description2 = product2.find('div.description')
    expect(description2.find('p').text()).to.equal('Strawberries Forever')
    expect(product1.instance().props.description).to.equal('Cool Snow Board')
    expect(product2.instance().props.description).to.equal('Strawberries Forever')
  })
  it('should display extra for div element with class extra', () => {
    const element = product1.find('div.extra')
    expect(element.hasClass('extra')).to.equal(true)
    expect(element.find('span').text()).to.equal('Submitted by:')
    expect(product1.instance().props.submitterAvatarUrl).to.equal('Avatar')
  })
  it('shoul diplay a image in element div with class ui-avatar-image inside class extra', () => {
    const element = product1.find('div.extra')
    expect(element.find('img.ui-avatar-image').hasClass('ui-avatar-image')).to.equal(true)
  })
  it('shoul diplay a image in element div with class ui-avatar-image inside class extra', () => {
    const element = product1.find('div.extra')
    expect(element.find('img.ui-avatar-image').hasClass('ui-avatar-image')).to.equal(true)
  })
})
