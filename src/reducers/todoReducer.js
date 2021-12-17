const todoReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'toggle':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
      );
    case 'delete':
      return state.filter((todo) => todo.id !== action.payload);

    case 'edit':
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.todo }
          : todo,
      );

    default:
      return state;
  }
};

export default todoReducer;
