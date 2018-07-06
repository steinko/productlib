import React from 'react';
export default class Product extends React.Component
{
  render() {
       return (<div  className = 'item'> Hello 
                      <div className = 'image'>
                      <img src= './images/Banana-Snowboard.png' alt="Snow Board" /> 
                      </div>
                </div>
                );
  }
  
}