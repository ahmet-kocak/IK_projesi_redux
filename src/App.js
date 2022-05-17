import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import HomePage from "./components/homePage/HomePage"
import {createStore,compose,applyMiddleware} from "redux"
import {Provider} from "react-redux"
import rootReducer from "./reducer/rootReducer";
import { BrowserRouter } from "react-router-dom";
import thunk from 'redux-thunk'


const allEnhancers=compose(
     applyMiddleware(thunk),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const myStore = createStore(rootReducer, allEnhancers)

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Provider store={myStore}>
          <HomePage/>
        </Provider>
        </BrowserRouter>
      </div>
    )}}

    
