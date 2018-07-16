import React from 'react'
export default class Product extends React.Component {
  render () {
    return (
      <div className = 'item'>
        <div className = 'image'>
          <img src= {this.props.productImageUrl} alt="Snow Board" ></img>
        </div>
        <div className = 'middel-aligned-content'>
          <div className ='header'>
            <a href= {this.props.Url}>
              <i className = 'large-caret-up-icon' >
                 Url
              </i>
            </a>
            {this.props.vote}
          </div>
          <div className = 'description'>

            <a>{this.props.title}</a>
            <p>Cool Snow Board</p>
          </div>
          <div className = 'extra'>
            <span>Submitted by:</span>
            <img className = 'ui-avatar-image' src= './images/avatar.png' alt="Avatar"></img>
          </div>
        </div>
      </div>
    )
  }
}
