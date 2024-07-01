
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './Store';

// Define a type for the slice state
interface RecipeState {
  recipes: any[];
  loading: boolean;
  error: string | null;
}

// Define the initial state using that type
const initialState: RecipeState = {
  recipes: [],
  loading: false,
  error: null,
};

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    fetchRecipesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchRecipesSuccess(state, action: PayloadAction<any[]>) {
      state.loading = false;
      state.recipes = action.payload;
    },
    fetchRecipesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchRecipesStart, fetchRecipesSuccess, fetchRecipesFailure } = recipeSlice.actions;

export const selectRecipes = (state: RootState) => state.recipes.recipes;
export const selectLoading = (state: RootState) => state.recipes.loading;
export const selectError = (state: RootState) => state.recipes.error;

export default recipeSlice.reducer;
