import { createSelector } from "reselect";

const todoList = (state) => state.todoList;
const filterSearch = (state) => state.filters.search;

const remainingSelector = createSelector(
  todoList,
  filterSearch,
  (todoList, searchText) => {
    return todoList.filter((todo) => todo.name.includes(searchText));
  }
);
export default remainingSelector;
