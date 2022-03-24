export function createStore(reducer, initialState) {
  let state = initialState;
  const callbacks = [];

  return {
    getStateProperty(key) {
      return state[key];
    },
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      callbacks.forEach((f) => f());
    },
    subscribe(f) {
      callbacks.push(f);
    },
  };
}
