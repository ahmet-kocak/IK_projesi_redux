import React, { Component } from "react";
import { AiFillTwitterCircle } from "react-icons/ai"
import { BsFacebook,BsWhatsapp } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa"

export default class Footer extends Component {
  render() {
    return (
      <div className="copyright mt-13">
       
     <div className="container">
         

               <div className="col-md-12  ">
                    <h3>Lorem</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    
               </div>

               <div className="col-md-12 mt-5">
                    <h3>Talk to us</h3>
                    <p><i className="fa fa-globe"></i> Lorem ipsum dolor sit amet</p>
                    <p><i className="fa fa-phone"></i> 000-000-0000</p>
                   
               </div>

              
                    <hr/>
              

              
                    <ul className=" d-inline-flex" style={{listStyleType: "none", justifyContent:"center",padding:"0"}}>
                      
                         <li style={{cursor: "pointer",marginRight:"90px"}}><AiFillTwitterCircle fontSize="35px" color="white" /></li>
                         <li style={{cursor: "pointer", marginRight:"90px", paddingTop:"3px"}}><BsFacebook fontSize="30px" color="white" /></li>
                         <li style={{cursor: "pointer", paddingTop:"3px",marginRight:"90px"}}><FaInstagram fontSize="30px" color="white"/></li>
                         <li style={{cursor: "pointer", paddingTop:"3px"}}><BsWhatsapp fontSize="30px" color="white"/></li>
                        
                    </ul>
               
               
          </div>
          <hr/>
        Created by &copy; Ahmet Koçak
     
    
      </div>
    );
  }
}
