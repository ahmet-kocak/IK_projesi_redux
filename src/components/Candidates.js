import React, { Component } from 'react'
import { connect } from 'react-redux';
import {ButtonGroup,Button} from "react-bootstrap"
import { deletePost,updatePost,fetchPost } from '../actions/userActions';
import CenteredModal from "./homePage/CenteredModal"


export  class Candidates extends Component {
  
  

    state={
      modalShow:false,
      boolenUpdate:false,
      saveUpdate:true,
      bool1:true,
      search:"",
      item:""}
    
  render() {
const onClickUpdate=(item,e)=>{e.preventDefault();

  this.setState({boolenUpdate:true,item:item})
  console.log(item,e)
}
    const onHideUpdate=(data)=>{
     this.props.updatePost(data._id,data);
     this.setState({saveUpdate:false});
    setTimeout(() => {this.props.fetchPost();this.setState({boolenUpdate:false,saveUpdate:true})}, 1000)
    }
    const onChange=(e)=>{this.setState({search:e.target.value})}
   
   const searchData=this.props.state.userReducer.filter(item=>{
    return (item.firstName.toUpperCase().indexOf(this.state.search.toUpperCase())!==-1 
    || item.lastName.toUpperCase().indexOf(this.state.search.toUpperCase())!==-1 )
  })
    return (
      <div className='Candidates'>
<form>
<table style={{width:"100%",position:"relative",top:"60px",backgroundColor:"#bdbebd",margin:"0"}}>
    <thead>
        <tr><th colSpan={4}><div className="form-floating mb-3 p-2">
        <input onChange={onChange}  type="search"className="form-control"id=""placeholder="Search..."name="search"value={this.state.search}autoComplete="off"required/>
        <label htmlFor="search">Search...</label></div></th></tr>
        <tr ><th style={{paddingLeft:"10px"}}>FirstName</th><th>LastName</th><th>Phone</th><th style={{paddingLeft:"15px",float:"right"}} >Detail // Update // Delete</th></tr>
    </thead>
    <tbody>
        {searchData.sort(function(a, b){
    var x = a.firstName.toLowerCase();
    var y = b.firstName.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  }).map((item,i)=>{ 
            return (
                <tr key={i} style={{borderTop:"2px solid yellow",fontSize:"20px"}} >
                  <td style={{paddingLeft:"10px"}}>{item.firstName}</td><td>{item.lastName}</td><td>{item.phone}</td><td className="col-md-2 p-1">
                    <div className="d-grid d-md-block float-end">
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary"onClick={() => this.setState({modalShow:true,item:item})}>Detail</Button>
                            <CenteredModal 
                            show={this.state.modalShow} 
                            onHide={() => this.setState({modalShow:false})} 
                            item={this.state.item}/>
                       
                       <Button variant="secondary" onClick={onClickUpdate.bind(this,item)}>Update</Button>
                    
                            <CenteredModal 
                            show={this.state.boolenUpdate} 
                            bool1="true" 
                            saveupdate={this.state.saveUpdate}
                            onHideUpdate={onHideUpdate}
                            item={this.state.item}/> 
                    
                        <Button variant="secondary" onClick={()=>{this.props.deletePost(item._id);this.props.fetchPost()}}>Delete</Button>
                    </ButtonGroup>
                    </div>
                    </td>
                </tr>
                
            )
        })}
    </tbody>
</table>
</form>


      </div>
    )
  }
}



const mapStateToProps = (state) => ({state})
const mapDispatchToProps = {deletePost,updatePost,fetchPost}
export default connect(mapStateToProps, mapDispatchToProps)(Candidates)