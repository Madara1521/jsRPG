import { combineReducers } from "redux"
import { attributeReducer } from "./reducers/attributeReducer"
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { levelReducer } from './reducers/levelReducer'


const rootReducer = combineReducers({
  attributeReducer,
  levelReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())