import React from 'react';
import store, { actions } from './store';

// eslint-disable-next-line func-names
const App = function () {
  store.subscribe(() => console.log(store.getState()));

  // actions
  store.dispatch(actions.add(20));
  store.dispatch(actions.take(50));
  store.dispatch(actions.add(40));
  store.dispatch(actions.clear());
  return (
    <h1>Hello</h1>
  );
};

export default App;
