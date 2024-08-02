import { combineReducers } from "redux"
import todoReducer from './todo/todoReducer'
import apiReducer from './api/apiReducer'

const rootReducer = combineReducers({
   todoReducer,
   apiReducer
})

export default rootReducer

//npm install react-router-dom
//npm install redux
//npm install react-redux