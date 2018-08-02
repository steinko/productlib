// @flow
import * as React from 'react'
 type ProductProps = {
         
          id: number,
          title: string,
          description: string,
          url: string,
          votes: number,
          submitterAvatarUrl: string,
          productImageUrl: string,
          onVote: Function
          }

export default class Product extends React.Component <ProductProps>{
constructor (props: ProductProps) {
   super(props)
   this.handleUpVote = this.handleUpVote.bind(this)
  }

  handleUpVote (): void {
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
