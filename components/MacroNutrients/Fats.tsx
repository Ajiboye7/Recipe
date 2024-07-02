"use client"
/*import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from "@/Redux/Store";
import { fetchRecipesStart, fetchRecipesSuccess, fetchRecipesFailure, selectRecipes, selectLoading, selectError } from '@/Redux/RecipeSlice';
import { fetchRecipesByFats } from '@/Redux/RecipeServices';



const FatRecipes = () => {

  const dispatch = useDispatch();
  const { recipes, loading, error } = useSelector((state: RootState) => state.recipes);
  const recipes = useSelector(selectRecipes);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchRecipesStart());
      try {
        const data = await fetchRecipesByFats(5,25);
        dispatch(fetchRecipesSuccess(data));
      } catch (err: any) {
        dispatch(fetchRecipesFailure(err.message));
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Fat Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FatRecipes;*/


/*import { useGetRecipeDataQuery } from '../Redux/RecipeApi';*/
"use client"
import { useGetRecipeDataQuery } from '@/Redux/RecipeApi';

const RecipeComponent: React.FC = () => {
  const { data, error, isLoading } = useGetRecipeDataQuery({ lt: '25', gt: '5' });

  if (isLoading) return <div>Loading...</div>;
 
  if (error) {
    const errorMessage = 'status' in error ? `Error: ${error.status}` : error.message;
    return <div>{errorMessage}</div>;
  }

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {data?.map((recipe: any) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeComponent;

