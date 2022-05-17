import React, { Component } from 'react'
import {Accordion} from "react-bootstrap"
export default class About extends Component {
  render() {
    return (
      <div className='about'>

<Accordion defaultActiveKey={['0',"1"]} alwaysOpen >
  <Accordion.Item eventKey="0">
    <Accordion.Header>Abaut Us</Accordion.Header>
    <Accordion.Body style={{backgroundColor:"lightpink",textIndent: "30px",
      lineHeight: "26px",}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1" >
    <Accordion.Header>Our Projects</Accordion.Header>
    <Accordion.Body  style={{backgroundColor:"lightgreen",textIndent: "30px",
      lineHeight: "26px",}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Contact</Accordion.Header>
    <Accordion.Body  style={{backgroundColor:"mediumpurple",textIndent: "30px",
      lineHeight: "26px",}}>
     <div> Adress:</div>
     <div> Phone:</div>
     <div> Fax:</div>
     <div> Email:</div>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>


      </div>
    )
  }
}
