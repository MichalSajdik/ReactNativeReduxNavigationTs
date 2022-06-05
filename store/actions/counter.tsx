import {COUNTER} from '../types';

export const incrementCounter = (payload: number) => ({
  type: COUNTER,
  payload,
});

export default {
  incrementCounter,
};
