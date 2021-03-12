import { combineReducers } from "redux";
import company from './company';
import user from './user';

const reducers = combineReducers({
  company, user
});

export default reducers
