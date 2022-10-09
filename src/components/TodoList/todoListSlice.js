const initialValue = [
  { id: 1, name: "Learn React", priority: "Medium", completed: false },
  { id: 2, name: "Learn Redux", priority: "Medium", completed: false },
  { id: 3, name: "Learn Javascript", priority: "High", completed: true },
];

const todoListReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/completed":
      return [
        ...state.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      ];
    default:
      return state;
  }
};

export default todoListReducer;
