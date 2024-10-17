const initialState = {
    todos: [],
    isDarkMode:false,
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload]
        };
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter((_, index) => index !== action.payload)
        };
      case 'TOGGLE_BACKGROUND':
        return{
          ...state,
          isDarkMode:!state.isDarkMode,
        };
        default:
        return state;
    }
  };
  
  export default todoReducer;