const DEFAULT_STATE = {
  count: 0,
};

export const counterReducer = (state = DEFAULT_STATE, action) => {
  if (action.type === "COUNTER_INCREMENT_COUNT") {
    const dupState = { ...state };

    dupState.count += 1;

    return dupState;
  } else if (action.type === "COUNTER_DECREMENT_COUNT") {
    const dupState = { ...state };

    dupState.count -= 1;

    return dupState;
  } else if (action.type === "COUNTER_SET_COUNT") {
    const dupState = { ...state };

    dupState.count = action.payload;

    return dupState;
  }

  return state;
};
