import { combineReducers } from 'redux';
import User from "./models/user";
import reducer from "./reducer";

const rootReducer = combineReducers({
  user: reducer(new User()),
});

export default rootReducer;
