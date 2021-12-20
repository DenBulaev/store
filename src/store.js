import { createStore } from './redux';

// Action types
const ADD = 'add';
const TAKE = 'take';
const CLEAR = 'clear';

// actions creater
export const actions = {
  add: (value) => ({ type: ADD, value }),
  take: (value) => ({ type: TAKE, value }),
  clear: () => ({ type: CLEAR }),
};

// reducer-function
const amountReducer = (amount, action) => {
  switch (action.type) {
    case ADD:
      return amount + action.value;

    case TAKE:
      return amount - action.value;

    case CLEAR:
      return 0;

    default:
      return amount;
  }
};

const store = createStore(amountReducer, 100);

export default store;
