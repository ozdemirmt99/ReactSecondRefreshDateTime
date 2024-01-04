import React, { Component } from 'react'
import Date from './Date/Date'
import Time from './Time/Time'
import { Row,Col } from 'antd';
export default class DateTime extends Component {
constructor(props){
  super(props);

  this.state = {
    hour:this.props.hour,
    minutes:this.props.minutes,
    second:this.props.second,
    year:this.props.year,
    month:this.props.month,
    day:this.props.day,
    dayName:this.props.dayName,
  }
}  

  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
        <div style={{
          backgroundColor:"blue"
        }}>
          
          <Date
            year={this.props.year}
            month={this.props.month}
            day={this.props.day}
            dayName={this.props.dayName}
          ></Date>
        </div>
        </Col>
      
        <div
        style={{
          backgroundColor:"turquoise"
        }}>
         
          <Time
            hour={this.props.hour}
            minute={this.props.minutes}
            second={this.props.second}
          ></Time>
        </div>
        
        </Row>
      </div>
    );
   
  }
}
