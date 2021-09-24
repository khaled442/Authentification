import { LOGIN, LOGIN_FAIL, LOGIN_SUCCES, REGISTER, REGISTER_FAIL, REGISTER_SUCCSS } from "../type/TypeAuth";



const initialState ={
    users: null,
    errors:null,
    loading:false,
    token:null
}


const reducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case REGISTER:
      case LOGIN:
        return { ...state,loading: true };
      case REGISTER_SUCCSS:
        return {...state, loading: false, users: payload };
      case REGISTER_FAIL:
        return {...state, loading: false, errors:payload };
      case LOGIN_SUCCES:
        return {...state, loading:false, token:payload}
      case LOGIN_FAIL:
        return {...state, loading:false, errors:payload}
      default: return state;
    }
  }

  export default reducer