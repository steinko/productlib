import React from 'react'
export default class Product extends React.Component {
  render () {
    return (
      <div className = 'item'>
        <div className = 'image'>
          <img src='./images/Banana-Snowboard.png' alt="Snow Board"/>
        </div>
        <div className = 'middel aligned content'>
          <div className = 'description'>
            <a>Snow Board</a>
            <p>Cool Snow Board</p>
          </div>
          <div className = 'extra'>
            <span>Submitted by:</span>
            <img className = 'ui avatar image' src= './images/avatar.png' alt="Avatar" />
          </div>
        </div>
      </div>
    )
  }
}
