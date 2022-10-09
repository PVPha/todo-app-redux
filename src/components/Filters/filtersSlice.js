// const initialValue = {
//   search: "",
//   status: "All",
//   priority: [],
// };

// const filtersReducer = (state = initialValue, action) => {
//   switch (action.type) {
//     case "filters/search":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filters/status":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filters/priority":
//       return {
//         ...state,
//         priority: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filtersReducer;

import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    search: (state, action) => {
      //mutation => unmutation
      //IMMER
      state.search = action.payload;
    },
    status: (state, action) => {
      state.status = action.payload;
    },
    priority: (state, action) => {
      state.priority = action.payload;
    },
  },
});

export default filtersSlice;
