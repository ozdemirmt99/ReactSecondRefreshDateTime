import React, { Component } from 'react'
import Badge from 'react-bootstrap/Badge';

export default class Hour extends Component {
  constructor(props){
    super(props);
  
  } 
  render() {
    return (
      <div
      style={{
        position:"absolute",
        left:"100px",
        fontSize:"150px",
        color:"yellow",
        backgroundColor:"turquoise"
        
      }}>{this.props.hour}:
      </div>
    )
  }
}
