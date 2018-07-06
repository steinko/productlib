import React from 'react';
export default class Product extends React.Component
{
  render() {
       return (<div  className = 'item'> Hello 
                      <div className = 'image'>
                      <img src= './images/Banana-Snowboard.png' alt="Snow Board" height="500" width="500" /> 
                      </div>
                </div>
                );
  }
  
}