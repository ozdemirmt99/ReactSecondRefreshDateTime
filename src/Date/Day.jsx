import React, { Component } from 'react'

export default class Day extends Component {
    constructor(props){
        super(props);
      
      } 
      sira=()=>{
        let month= this.props.month
        if(month==1)return("st")
        else if(month==2)return("nd")
        else if(month==3)return("rd")
        else return("th")
       }
  render() {
    return (
      <div
      style={{
        fontSize:"60px",
        textAlign:"center",
        backgroundColor:"turquoise"
,      }}>{this.props.day} {this.sira()} Day
      </div>
    )
  }
}
