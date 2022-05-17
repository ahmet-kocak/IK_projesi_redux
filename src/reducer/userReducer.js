import {datauser} from "../datausers"

const initialState = datauser


export  function userReducer (state=initialState,action)  {
  switch (action.type) {
    case "CREATE_POST":return [...state,action.payload];
    case "FETCH_POSTS":return [...action.payload];
    case "DELETE_POST":return  [...state.filter(item=>item._id!==action.payload)]
    case "UPDATE_POST":return  [...state.filter(item=>item._id!==action.payload._id),action.payload.data]
    default:return state
  }
}



/* 

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case types.FETCH_SINGLE_POST:
      return {
        ...state,
        currentPost: action.payload,
      };
    case types.CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case types.UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id === action.payload._id) {
            return action.payload;
          } else {
            return post;
          }
        }),
        currentPost: action.payload,
      };
    case types.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
        currentPost: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default postReducer;

 */

