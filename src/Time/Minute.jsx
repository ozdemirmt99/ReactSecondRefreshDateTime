import React, { Component } from 'react'

export default class Minute extends Component {
  constructor(props){
    super(props);
  
  } 
  islower=()=>{
    let min=this.props.minute
   if(min<=9){
    return("0")
   }
  }
  render() {
    return (
      <div style={{
        position:"absolute",
        left:"300px",
        fontSize:"150px",
        color:"yellow",
        backgroundColor:"turquoise"
        
      }}>
        {this.islower()}{this.props.minute}:</div>
    )
  }
}

