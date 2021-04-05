import { SIGNIN } from '../actions/login'

const INITIAL_STATE = {
  login: {email: "", password: "", error: "", token: ""}
};

function login (state = {}, action) {
 
  switch (action.type) {
    case SIGNIN :
      return {
        ...state,
        ...action.payload,
      };
    default :
      return state;
  }
}

export default login;
