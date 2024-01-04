import React, { Component } from 'react'

export default class Month extends Component {
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
      aysecimi=()=>{
        switch (this.props.month) {
          case 0:
            return("January")
            break;
          case 1:
            return("February")
            break;
          case 2:
            return("March")
            break;
          case 3:
            return("April")
            break;
          case 4:
            return("May")
            break;
          case 5:
            return("June")
            break;
          case 6:
            return("July")
            break;
          case 7:
            return("August")
            break;
          case 8:
            return("September")
            break;
          case 9:
            return("October")
            break;
          case 10:
            return("November")
            break;
          case 11:
            return("December")
            break;

        }
      }
  render() {
    return (
      <div
      style={{
        fontSize:"60px",
        textAlign:"center",
        backgroundColor:"darkgoldenrod"
,      }}>{this.props.month} {this.sira()} Month({this.aysecimi()})</div>
    )
  }
}
