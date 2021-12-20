import React from 'react';
import store, { ADD, TAKE, CLEAR } from './store';

// eslint-disable-next-line func-names
const App = function () {
  store.subscribe(() => console.log(store.getState()));

  // actions
  store.dispatch({ type: ADD, value: 20 });
  store.dispatch({ type: TAKE, value: 50 });
  store.dispatch({ type: ADD, value: 40 });
  store.dispatch({ type: CLEAR });
  return (
    <h1>Hello</h1>
  );
};

export default App;
