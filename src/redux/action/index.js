import * as types from './ActionTypes';

export function set_company(name, seq) {
  return {
    type: types.SET_COMPANY,
    name, seq
  };
}

export function set_user(id, password) {
  return {
    type: types.SET_USER,
    id, password
  };
}

export function set_info(nick, email, country,phone, image) {
  return {
    type: types.SET_INFO,
    nick, email, country,phone, image
  };
}
