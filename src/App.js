import React from 'react';
import store, { actions } from './store';

// eslint-disable-next-line func-names
const App = function () {
  store.subscribe(() => console.log(store.getState()));

  // actions
  store.dispatch(actions.add('test2', 20));
  store.dispatch(actions.add('ababagalamaga', 200));
  store.dispatch(actions.add('aloha', [{ a: 1 }, { b: 2 }]));
  // store.dispatch(actions.clear());

  console.log(store.getStateProperty('aloha'));
  return (
    <h1>Redux Basics</h1>
  );
};

export default App;
