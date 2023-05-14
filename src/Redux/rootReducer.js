import { combineReducers } from "redux"
import { attributeReducer } from "./reducers/attributeReducer"
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'


const rootReducer = combineReducers({
  attributeReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())