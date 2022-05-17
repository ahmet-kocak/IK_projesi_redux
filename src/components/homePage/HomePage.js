import React, {useEffect,useState} from 'react'
import { connect } from 'react-redux'
import {Routes,Route,Navigate} from 'react-router-dom'
import Headers from "./Headers"
import FormData from "./FormData"
import About from "../About"
import Slider from './Slider'
import Footer from "./Footer"
import {fetchPost } from '../../actions/userActions'
import Candidates from '../Candidates'

function HomePage(props) {
const [up, setUp] = useState()


  const updateFormdata=(par)=>{
    setUp(par)
  }

  useEffect(() => {
    props.fetchPost()
  }, [up])


  console.log(props)
  
  
    return (<div  style={{backgroundColor:"#707070"}}>
      <Headers/>
     
     
<Routes>

  <Route path="/" element={<Navigate replace to="/posts" />}/>
  <Route path="/IK_projesi_redux" element={<Navigate replace to="/posts"/>}/>
  <Route path="/posts" element={<><Slider/><FormData updateFormdata={updateFormdata}/></>}/>
  <Route path="/Canditates" element={<Candidates/>}/>
  <Route path="/About" element={<About/>}/>
  
</Routes>
<Footer/>


</div>)
  
}






const mapStateToProps = (state) =>({state})
const mapDispatchToProps = { fetchPost }
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)


