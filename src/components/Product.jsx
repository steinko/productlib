import React from 'react'
export default class Product extends React.Component {

  constructor(props) {
     super(props)
     this.handleUpVote = this.handleUpVote.bind(this)
   }
   
  handleUpVote()
   {
      this.props.onVote(this.props.id)
   }
   
  
   
  render () {
    return (
      <div className = 'item'>
        <div className = 'image'>
          <img src= {this.props.productImageUrl} alt="Product" />
        </div>
        <div className = 'middel-aligned-content'>
          <div className ='header'>
            <a onClick= {this.handleUpVote}>
              <i className = 'large-caret-up-icon' /> 
               click
            </a>
            {this.props.votes}
          </div>
          <div className = 'description'>
            <a href={this.props.url} >
              {this.props.title}
            </a>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className = 'extra'>
            <span>Submitted by:</span>
            <img 
               className = 'ui-avatar-image'
                src= {this.props.submitterAvatarUrl} alt="Avatar"
              />
          </div>
        </div>
      </div>
    )
  }
}
