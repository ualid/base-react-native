import { combineReducers } from 'redux'
import login from './login'
import schools from './schools'


export default combineReducers({
  login,
  schools
});