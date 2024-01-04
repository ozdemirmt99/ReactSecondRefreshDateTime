import React, { Component } from 'react'

export default class Second extends Component {
  constructor(props){
    super(props);
  
  } 
  islower=()=>{
    let min=this.props.second
   if(min<=9){
    return("0")
   }
  }
  render() {
    return (
      <div style={{
        position:"absolute",
        
        left:"500px",
        fontSize:"150px",
        color:"yellow",
        backgroundColor:"turquoise"
        
      }}>
       {this.islower()}{this.props.second}
      </div>
    )
  }
}
