import {COUNTER} from '../types';

const initialState = {
  counter: 0,
};

type Action = {
  type: string;
  payload?: any;
};

export default (state: any = initialState, action: Action) => {
  switch (action.type) {
    case COUNTER:
      return {...state, counter: state.counter + action.payload}
    default:
      return state;
  }
};
