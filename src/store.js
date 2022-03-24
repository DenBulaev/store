import { createStore } from './redux';

// Action types
const ADD = 'add';
const CLEAR = 'clear';

// actions creater
export const actions = {
  add: (key, value) => ({ type: ADD, key, value }),
  clear: () => ({ type: CLEAR }),
};

// reducer-function
const reducer = (obj, action) => {
  switch (action.type) {
    case ADD:
      return { ...obj, [action.key]: action.value };

    case CLEAR:
      return {};

    default:
      return obj;
  }
};

const store = createStore(reducer, {});

export default store;
