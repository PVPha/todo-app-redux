const initialValue = {
  search: "",
  status: "All",
  priority: [],
};

const filtersReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "filters/search":
      return {
        ...state,
        search: action.payload,
      };
    case "filters/status":
      return {
        ...state,
        status: action.payload,
      };
    case "filters/priority":
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
