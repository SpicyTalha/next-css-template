import { configureStore } from "@reduxjs/toolkit";

// Import your reducers or API slices here
// import { api } from "@/features/api/apiSlice";
// import counterReducer from "@/features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    // Add reducers/slices here
    // counter: counterReducer,
    // [api.reducerPath]: api.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(api.middleware),
});

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
