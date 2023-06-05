import { combineReducers } from "redux"
import { attributeReducer } from "./reducers/attributeReducer"
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { levelReducer } from './reducers/levelReducer'
import { characteristicsReducer } from './reducers/characteristicsReducer'
import { bonusReducer } from './reducers/bonusReducer'
import { lootAndDescriptionReducer } from './reducers/lootAndDescriptionReducer'
import { lootOptionsReducer } from './reducers/lootOptionsReducer'



const rootReducer = combineReducers({
  attributeReducer,
  levelReducer,
  characteristicsReducer,
  bonusReducer,
  lootAndDescriptionReducer,
  lootOptionsReducer
})

export const store = createStore(rootReducer, composeWithDevTools())