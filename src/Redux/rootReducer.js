import { combineReducers } from "redux"
import { attributeReducer } from "./reducers/attributeReducer"
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { levelReducer } from './reducers/levelReducer'
import { characteristicsReducer } from './reducers/characteristicsReducer'
import { bonusReducer } from './reducers/bonusReducer'
import { lootAndDescriptionReducer } from './reducers/lootAndDescriptionReducer'



const rootReducer = combineReducers({
  attributeReducer,
  levelReducer,
  characteristicsReducer,
  bonusReducer,
  lootAndDescriptionReducer
})

export const store = createStore(rootReducer, composeWithDevTools())