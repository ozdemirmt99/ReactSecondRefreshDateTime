import React, { Component } from 'react'
import Year from './Year'
import Day from './Day'
import Month from './Month'
import { Row,Col } from 'antd'
export default class Date extends Component {
    constructor(props){
        super(props);
      
      }  
  render() {
    return (
      <div>
        <h1>Date:</h1>
        <Row>
          <Col>
        <Col span={1}>
        <Day 
        day={this.props.day}></Day>
        </Col>
        
        <Col span={8}>
        <Month
        month={this.props.month}></Month>
        </Col>
       
       
        
        <Col span={8}>
        <Year
        year={this.props.year}></Year>
        </Col>
        </Col>
        </Row>
      </div>
    )
  }
}
