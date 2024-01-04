import React, { Component } from 'react'
import Hour from './Hour'
import Minute from './Minute'
import Second from './Second'
import { Col,Row } from 'antd'
export default class Time extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
      <div >
        <div
        style={{
          left:"500px"
        }}>
        <h1>Time:</h1>
        </div>
       <div
       style={{
        position:"relative",
        left:"550px",
        backgroundColor:"turquoise",
        height:"409px"
      }}>
        <Hour hour={this.props.hour}></Hour>
        
        <Minute minute= {this.props.minute}></Minute>
        
        
        <Second second={this.props.second}></Second>
        </div>
      </div>
    );
  }
}
