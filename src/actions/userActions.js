import axios from "axios";
import {apiEndpoint} from "../config/helpers"


export const createPost = (post) =>{ 
  return async (dispatch) => {
    try { await axios.post(apiEndpoint,post);
        /* dispatch({type:"CREATE_POST",payload:post}); */} 
    catch (error) {console.log(error);}
}};

export const fetchPost = () => {
  return async (dispatch) => {
    try {const res  = await axios.get(apiEndpoint);
        dispatch({type:"FETCH_POSTS",payload: res.data,});}
    catch (error) {console.log(error);}
}}; 


export const deletePost = (id) => async (dispatch) => {
  try {await axios.delete(`${apiEndpoint}${id}`);
      /* dispatch({type:"DELETE_POST",payload:id,}) */;}
  catch (error) {console.log(error);}
};

export const updatePost=(id,updatedPost)=>async (dispatch)=>{
  try {await axios.patch(`${apiEndpoint}${id}`,updatedPost);
    /* dispatch({ type:"UPDATE_POST", payload:{_id:id,data:updatedPost} }) */ ;} 
  catch (error) {console.log(error.message);}
}


/* 



export const fetchSinglePost = (id) => async (dispatch) => {
  try {
    const { data } = await fetchSinglePost1(id);
    dispatch({
      type:"FETCH_SINGLE_POST",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
 */

/* import axios from "axios";

export const userActions = (payload) => ({
  type: "ADD",
  payload,
});

export const deleteActions = (payload) => ({
  type: "DELETE",
  payload,
});

export const updateActions = (payload) => ({
  type: "UPDATE",
  payload,
});

export const getData = () => {
  return async (dispatch) => {
    await axios.get("http://localhost:5000/posts/").then((res) => {
   dispatch(userActions(res.data));
    });
  };
};

export const postData = (myData) => {
  return async (dispatch) => {
    
    await axios.post("http://localhost:5000/posts/",myData);
      console.log(myData);
      dispatch(userActions(myData));
    
  };
}; */