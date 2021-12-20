import React from 'react';

// eslint-disable-next-line func-names
const App = function () {
  let moneyLeft = 100;
  console.log(moneyLeft);

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

  const action1 = { type: 'add', value: 20 };
  moneyLeft = amountReducer(moneyLeft, action1);
  console.log(moneyLeft);

  const action2 = { type: 'take', value: 50 };
  moneyLeft = amountReducer(moneyLeft, action2);
  console.log(moneyLeft);

  const action3 = { type: 'add', value: 40 };
  moneyLeft = amountReducer(moneyLeft, action3);
  console.log(moneyLeft);

  const action4 = { type: 'clear' };
  moneyLeft = amountReducer(moneyLeft, action4);
  console.log(moneyLeft);

  return (
    <h1>Hello</h1>
  );
};

export default App;
