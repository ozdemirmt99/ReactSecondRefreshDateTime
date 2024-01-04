import React, { Component } from 'react'

export default class Year extends Component {
    constructor(props){
        super(props);
      
      } 
  render() {
    return (
      <div
      style={{
        fontSize:"60px",
        textAlign:"center",
        backgroundColor:"darkgreen"
,      }}>
      {this.props.year} Year</div>
    )
  }
}
