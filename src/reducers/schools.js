import {RETRIVE_SCHOOLS} from "../actions/schools";

function schools (state = {}, action) {
 
  switch (action.type) {
      case RETRIVE_SCHOOLS:
      return {
        ...state,
        ...action.payload,
      }
    default :
      return state;
  }
}

export default schools;
