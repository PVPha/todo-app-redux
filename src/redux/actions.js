export const addTodo = (data) => {
  return { type: "todoList/addTodo", payload: data };
};

export const toggleCompleted = (id) => {
  return {
    type: "todoList/completed",
    payload: id,
  };
};

export const filterSearch = (text) => {
  return {
    type: "filters/search",
    payload: text,
  };
};

export const filterStatus = (status) => {
  return {
    type: "filters/status",
    payload: status,
  };
};

export const filterPriority = (priority = []) => {
  return {
    type: "filters/priority",
    payload: priority,
  };
};
