import {combineReducers} from 'redux'
import userReducer from './reducer_user'
import goalsReducer from './reducer_goals'
import completedGoalsReducer from './reducer_completed_goals'

export default combineReducers({
  user: userReducer,
  goals: goalsReducer,
  completeGoals: completedGoalsReducer
})
