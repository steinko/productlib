import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Product from '../../src/components/Product'

configure({ adapter: new Adapter() })

describe('Unit Test Product ', () => {
	
  var product1
  var product2
  var product1Instance
  var product2Instance
  //var handleProductUpVote
  
  before(() => {
	//handleProductUpVote = cy.spy();
    product1 = shallow(<Product id = '1' productImageUrl = 'productImage' url = '#1' votes =  {41} title = 'Snow Board' description = 'Cool Snow Board' submitterAvatarUrl = 'Avatar'  />)  //onVote = {handelProductUpVote} />) 
    product1Instance = 	product1.instance()	
    product2 = shallow(<Product id = '2' productImageUrl = 'coolproductImage' url = '#2' votes = {46} title = 'Strawberries' description = 'Strawberries Forever' submitterAvatarUrl = 'FemailAvatar'  />) //onVote = {handelProductUpVote} />)
    product2Instance = 	product2.instance()	
  })
  
  it('should exisit a div element with class images and a', () => {
    expect(product1.find('div.image').hasClass('image')).to.equal(true)
  })
  
  it('should exists property productImageUrl', () => {
    expect(product1Instance.props.productImageUrl).to.equal('productImage')
    expect(product2Instance.props.productImageUrl).to.equal('coolproductImage')
  })
  it('should exist a div element with class item', () => {
    expect(product1.find('div.item').hasClass('item')).to.equal(true)
  })
    it('should exist property id', () => {
    expect(product1Instance.props.id).to.equal('1')
    expect(product2Instance.props.id).to.equal('2')  
  })
  xit('should check div element with class middel-aligned-content', () => {
    const MACelement = product1.find('div.middel-aligned-content')
    expect(MACelement.hasClass('middel-aligned-content')).to.equal(true)
    const header = MACelement.find('div.header')
    expect(header.hasClass('header')).to.equal(true)
    const a = header.find('a')
    expect(header.text()).to.equal('41')
    expect(a.find('i.large-caret-up-icon').hasClass('large-caret-up-icon')).to.equal(true)
  })
  it('should exist a poperty url', () => {
    expect(product1Instance.props.url).to.equal('#1')
    expect(product2Instance.props.url).to.equal('#2')
  })
  it('should exist a poperty votes', () => {
    expect(product1Instance.props.votes).to.equal(41)
    expect(product2Instance.props.votes).to.equal(46)
  })
  
  xit('should increase property votes by clikcing', () => {
	const handleProductUpVote = cy.spy();
	const product = shallow(<Product id = '1' votes =  {41}  onVote = {handleProductUpVote} />) 
	const header = product.find('div.header')
    expect(product.instance().props.votes).to.equal(41)
    expect(header.text()).to.equal('41')
    header.find('a').simulate('click');
	handleProductUpVote.called
    expect(product1.instance().props.votes).to.equal(42)
    expect(header.text()).to.equal('42')
  })
  
  it('should display short decription for div element with class decription', () => {
    const description1 = product1.find('div.description')
    expect(description1.hasClass('description')).to.equal(true)
    expect(description1.find('a').text()).to.equal('Snow Board')
    const description2 = product2.find('div.description')
    expect(description2.find('a').text()).to.equal('Strawberries')
  })
  it('should exist property title', () => {
    expect(product1Instance.props.title).to.equal('Snow Board')
    expect(product2Instance.props.title).to.equal('Strawberries')
  })
  
  it('should display long decription for div element with class decription', () => {
    const description = product1.find('div.description')
    expect(description.hasClass('description')).to.equal(true)
    expect(description.find('p').text()).to.equal('Cool Snow Board')
    const description2 = product2.find('div.description')
    expect(description2.find('p').text()).to.equal('Strawberries Forever')
  })
  it('should display values of propery decription', () => {
    expect(product1Instance.props.description).to.equal('Cool Snow Board')
    expect(product2Instance.props.description).to.equal('Strawberries Forever')
  })
  it('should display extra for div element with class extra', () => {
    const element = product1.find('div.extra')
    expect(element.hasClass('extra')).to.equal(true)
    expect(element.find('span').text()).to.equal('Submitted by:')
  })
  it('should display value for proery submittterAvatarUrl', () => {
    expect(product1Instance.props.submitterAvatarUrl).to.equal('Avatar')
  })
  it('shoul diplay a image in element div with class ui-avatar-image inside class extra', () => {
    const element = product1.find('div.extra')
    expect(element.find('img.ui-avatar-image').hasClass('ui-avatar-image')).to.equal(true)
  })
  it('shoul diplay a image in element div with class ui-avatar-image inside class extra', () => {
    const element = product1.find('div.extra')
    expect(element.find('img.ui-avatar-image').hasClass('ui-avatar-image')).to.equal(true)
  })
  it('shoul diplay a image in element div with class ui-avatar-image inside class extra', () => {
    const element = product1.find('div.extra')
    expect(element.find('img.ui-avatar-image').hasClass('ui-avatar-image')).to.equal(true)
  })
  xit('should increment votes by 1', () => {
    const handleProductUpVote = cy.spy();
    const product = shallow(<Product id = '2'  votes = {1}  onVote = {handleProductUpVote} />)
    const productInstance = product.instance()	
    expect(productInstance.props.votes).to.equal(1)
    productInstance.handleUpVote()
    handleProductUpVote.called
    expect(productInstance.props.votes).to.equal(2)
  })
  
   it('simulates click events', () => {
    const onButtonClick = cy.spy();
    const wrapper = shallow(<Product id = {1} onVote = {onButtonClick} />);
    wrapper.find('div.header').find('a').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
  });
  
})
