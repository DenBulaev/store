import React from 'react';
import store from './store';

// eslint-disable-next-line func-names
const App = function () {
  store.subscribe(() => console.log(store.getState()));

  // actions
  store.dispatch({ type: 'add', value: 20 });
  store.dispatch({ type: 'take', value: 50 });
  store.dispatch({ type: 'add', value: 40 });
  store.dispatch({ type: 'clear' });
  return (
    <h1>Hello</h1>
  );
};

export default App;
