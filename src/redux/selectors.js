import { createSelector } from "reselect";

const todoList = (state) => state.todoList;
const filterSearch = (state) => state.filters.search;
const filterStatus = (state) => state.filters.status;
const filterPriority = (state) => state.filters.priority;

const remainingSelector = createSelector(
  todoList,
  filterSearch,
  filterStatus,
  filterPriority,
  (todoList, searchText, status, priority) => {
    return todoList.filter((todo) => {
      if (status !== "All") {
        return (
          todo.name.includes(searchText) &&
          (status === "Completed" ? todo.completed : !todo.completed) &&
          (priority.length > 0 ? priority.includes(todo.priority) : true)
        );
      }
      return priority.length > 0
        ? todo.name.includes(searchText) && priority.includes(todo.priority)
        : todo.name.includes(searchText);
    });
  }
);
export default remainingSelector;
