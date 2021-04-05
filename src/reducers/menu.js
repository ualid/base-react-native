import {RETRIVE_MENU} from "../actions/menu"

function menu (state = {}, action) {
 
  switch (action.type) {
      case RETRIVE_MENU:
      return {
        ...state,
        ...action.payload,
      }
    default :
      return state;
  }
}

export default menu;
