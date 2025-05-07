# Redux Toolkit Flow Chart

This document describes the flow of state management using **Redux Toolkit** in a simple counter example.

---

## 🔁 Flow Diagram

```plaintext
      ┌────────────────────┐
      │ User clicks button │
      └─────────┬──────────┘
                ↓
 ┌─────────────────────────────┐
 │ dispatch(increment())       │◄─── Action Creator from counterSlice
 └────────────┬────────────────┘
              ↓
    ┌─────────────────────┐
    │ Redux store receives│
    │      action         │
    └────────────┬────────┘
                 ↓
     ┌──────────────────────┐
     │ Reducer runs:        │
     │ case: increment      │
     │ state.value += 1     │
     └────────────┬─────────┘
                  ↓
      ┌───────────────────────┐
      │ New state saved in    │
      │ Redux store           │
      └────────────┬──────────┘
                   ↓
     ┌─────────────────────────────┐
     │ useSelector reads new state │
     └────────────┬────────────────┘
                  ↓
       ┌────────────────────┐
       │ React component    │
       │ re-renders         │
       └────────────────────┘
---

## 🧠 Explanation

1. **User Interaction**
   The user clicks a button in the React UI.

2. **Dispatch Action**
   The `dispatch(increment())` function is called, which is an action creator from `counterSlice`.

3. **Redux Store**
   The Redux store receives the dispatched action.

4. **Reducer Execution**
   The reducer associated with the `increment` action is executed. It updates the `state.value` by increasing it by 1.

5. **State Update**
   The updated state is saved back into the Redux store.

6. **useSelector Hook**
   The `useSelector` hook reads the updated state value from the store.

7. **React Re-render**
   React component detects state change and re-renders with the new count.

---

## 📁 Related Files

- `counterSlice.js` – Defines reducer and actions.
- `store.js` – Configures the Redux store.
- `App.js` – Contains UI and logic for dispatching actions and reading state.

---
```
