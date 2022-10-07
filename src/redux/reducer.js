const initialValue = {
  filters: {
    search: "",
    status: "",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Learn React", priority: "Medium", completed: false },
    { id: 2, name: "Learn Redux", priority: "Medium", completed: false },
    { id: 3, name: "Learn Javascript", priority: "High", completed: true },
  ],
};

const rootReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return { ...state, todoList: [...state.todoList, action.payload] };
    case "todoList/completed":
      return {
        ...state,
        todoList: [
          ...state.todoList.map((todo) =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
          ),
        ],
      };
    case "filters/search":
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      };
    case "filters/status":
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
