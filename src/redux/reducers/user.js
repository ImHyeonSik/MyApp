import * as types from '../action/ActionTypes';

const initialState = {
  userID: '', userPassword: '',
  userNick: '', userEmail: '',
  userPhone: '', userImage: null,
  userCountry: '',
  // profile: {
  //   name: '',
  //   pw: '',
  // },
  // friends: {
  //   list: []
  // },
}
export default function user (state=initialState, action){

  switch(action.type){
    case types.SET_USER:
      return {...state, userID: action.id, userPassword: action.password};
      // return {...state, profile: {
      //     ...state.profile,
      //   name: action.name,
      //   }};
      // state.setIn(['profile', 'name'], action.name)
    case types.SET_INFO:
      return {...state, userNick: action.nick, userEmail: action.email, userCountry: action.country,
              userPhone: action.phone, userImage: action.image};
    default:
      return state;
  }
}
