import { createStore } from './redux';

// Action types
export const ADD = 'add';
export const TAKE = 'take';
export const CLEAR = 'clear';

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
