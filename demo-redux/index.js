const redux = require("redux");

let INITIAL_VALUE = {
  counter: 0,
};

const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;

  // Handle increment action
  if (action.type == "INCREMENT") {
    newStore = { counter: store.counter + 1 };

    // Handle decrement action
  } else if (action.type == "DECREMENT") {
    newStore = { counter: store.counter - 1 };
  }

  // Handle reset action
  else if (action.type == "RESET") {
    newStore = { counter: 0 };
  }

  return newStore;
};

const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "RESET" });
