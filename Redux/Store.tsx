/*import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './RecipeSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    recipes: recipeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;*/

import { configureStore } from "@reduxjs/toolkit";
import { RecipeApi } from "./RecipeApi";

const store = configureStore({
  reducer: {
    [RecipeApi.reducerPath]: RecipeApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(RecipeApi.middleware)
});

export default store;
