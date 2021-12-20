import React from 'react';
import { createStore } from './store';

// eslint-disable-next-line func-names
const App = function () {
  // reducer-function
  const amountReducer = (amount, action) => {
    switch (action.type) {
      case 'add':
        return amount + action.value;

      case 'take':
        return amount - action.value;

      case 'clear':
        return 0;

      default:
        return amount;
    }
  };

  const store1 = createStore(amountReducer, 100);

  store1.subscribe(() => console.log(store1.getState()));

  // actions
  store1.dispatch({ type: 'add', value: 20 });
  store1.dispatch({ type: 'take', value: 50 });
  store1.dispatch({ type: 'add', value: 40 });
  store1.dispatch({ type: 'clear' });
  return (
    <h1>Hello</h1>
  );
};

export default App;
