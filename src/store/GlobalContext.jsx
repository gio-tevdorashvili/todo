import { createContext, useReducer } from 'react';

export const globalContext = createContext();

const initialState = {
  inputValues: [],
  active: [],
  completed: [],
  clearCompleted: [],
  current: 'inputValues',
  activeList: 'all',
  leftToDo: 0,
  allChecked: false,
};

const reducer = (state, action) => {
  if (action.type === 'TOGGLE') {
    let checkedAll = false;
    const toggled = state.inputValues.map((el) => {
      if (!state.allChecked) {
        checkedAll = true;
        return { ...el, checked: true };
      } else {
        return { ...el, checked: false };
      }
    });
    return {
      ...state,
      inputValues: [...toggled],
      current: 'inputValues',
      allChecked: checkedAll,
      leftToDo: checkedAll ? 0 : state.inputValues.length,
    };
  }

  if (action.type === 'INPUT') {
    return {
      ...state,
      inputValues: [...state.inputValues, action.payload],
      leftToDo: state.leftToDo + 1,
    };
  }
  if (action.type === 'CHECKED' && state.inputValues.length > 0) {
    let left = state.leftToDo;
    const withChecks = state.inputValues.map((el) => {
      if (el.id === action.payload.id) {
        if (left > 0 && !el.checked) left -= 1;
        else left += 1;

        return { ...el, checked: !el.checked };
      } else {
        return { ...el };
      }
    });
    return { ...state, inputValues: [...withChecks], leftToDo: left };
  }
  if (action.type === 'ALL') {
    return { ...state, current: 'inputValues', activeList: 'all' };
  }
  if (action.type === 'ACTIVE') {
    const activeList = state.inputValues.filter((el) => {
      return el.checked === false || el.checked === undefined;
    });
    return {
      ...state,
      active: [...activeList],
      current: 'active',
      activeList: 'active',
    };
  }
  if (action.type === 'COMPLETED') {
    const completedList = state.inputValues.filter((el) => {
      return el.checked;
    });
    return {
      ...state,
      completed: [...completedList],
      current: 'completed',
      activeList: 'completed',
    };
  }
  if (action.type === 'CLEAR_COMPLETED') {
    const clear = state.inputValues.filter((el) => {
      return el.checked === undefined || el.checked === false;
    });

    return { ...state, inputValues: [...clear], current: 'inputValues' };
  }
};

const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <globalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </globalContext.Provider>
  );
};

export default GlobalContextProvider;
