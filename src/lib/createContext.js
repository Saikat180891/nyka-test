import React from "react";

const createContext = (reducer, externalActions = {}, initialState) => {
  const Context = React.createContext();

  const Provider = ({
    children,
    onInit = () => {},
    internalActions = {},
    ...rest
  }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState, () => ({
      ...initialState,
      ...onInit(),
    }));

    function createActions(d, s) {
      const actions = { ...externalActions, ...internalActions };
      const combineActions = {};
      for (let action in actions) {
        combineActions[action] = actions[action](d, s);
      }
      return combineActions;
    }

    return (
      <Context.Provider
        value={{ ...state, ...createActions(dispatch, state), ...rest }}
      >
        {children}
      </Context.Provider>
    );
  };

  return [Context, Provider];
};

export { createContext };
