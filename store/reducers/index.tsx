import {combineReducers} from 'redux';
import counter from './counter';

const appReducer = combineReducers({
  counter,
});

export default appReducer;

export type State = ReturnType<typeof appReducer>;
