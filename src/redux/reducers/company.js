import * as types from '../action/ActionTypes';

const initialState = {
  compName: '' , comSeq: 0
}
export default function company (state=initialState, action){

  switch(action.type){
    case types.SET_COMPANY:
      // const {name: compName, seq: comSeq} = action.info
      // return {...state, compName, ...action.info};
      return {...state, compName: action.name, comSeq: action.seq};
      // const user = this.state.user;

    default:
      return state;
  }
}
