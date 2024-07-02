/*import axios from 'axios';

const API_HOST = 'keto-diet.p.rapidapi.com';
const API_KEY = 'cdd55f2df6msh1337361e79a64f1p1b12c6jsn48d27f4e316a';

const axiosInstance = axios.create({
  baseURL: `https://${API_HOST}`,
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': API_HOST,
  },
});

export const fetchAllRecipes = async () => {
  const response = await axiosInstance.get('/');
  return response.data;
};

export const fetchSingleRecipe = async (id: string) => {
  const response = await axiosInstance.get('/', { params: { id } });
  return response.data;
};

export const searchRecipe = async (query: string) => {
  const response = await axiosInstance.get('/', { params: { search: query } });
  return response.data;
};

export const fetchCategories = async () => {
  const response = await axiosInstance.get('/categories/');
  return response.data;
};

export const fetchRecipesByCategory = async (category: string) => {
  const response = await axiosInstance.get('/', { params: { category } });
  return response.data;
};

export const fetchRecipesByDifficulty = async (difficulty: string) => {
  const response = await axiosInstance.get('/', { params: { difficulty } });
  return response.data;
};

export const fetchRecipesByPrepTime = async (minTime: number, maxTime: number) => {
  const response = await axiosInstance.get('/', {
    params: {
      prep_time_in_minutes__lt: maxTime,
      prep_time_in_minutes__gt: minTime,
    },
  });
  return response.data;
};

export const fetchRecipesByCookTime = async (minTime: number, maxTime: number) => {
  const response = await axiosInstance.get('/', {
    params: {
      cook_time_in_minutes__lt: maxTime,
      cook_time_in_minutes__gt: minTime,
    },
  });
  return response.data;
};

export const fetchRecipesByCalories = async (minCalories: number, maxCalories: number) => {
  const response = await axiosInstance.get('/', {
    params: {
      calories__lt: maxCalories,
      calories__gt: minCalories,
    },
  });
  return response.data;
};

export const fetchRecipesByFats = async (minFats: number, maxFats: number) => {
  const response = await axiosInstance.get('/', {
    params: {
      fat_in_grams__lt: maxFats,
      fat_in_grams__gt: minFats,
    },
  });
  return response.data;
};

export const fetchRecipesByCarbohydrates = async (minCarbs: number, maxCarbs: number) => {
  const response = await axiosInstance.get('/', {
    params: {
      carbohydrates_in_grams__lt: maxCarbs,
      carbohydrates_in_grams__gt: minCarbs,
    },
  });
  return response.data;
};

export const fetchRecipesByProtein = async (minProtein: number, maxProtein: number) => {
  const response = await axiosInstance.get('/', {
    params: {
      protein_in_grams__lt: maxProtein,
      protein_in_grams__gt: minProtein,
    },
  });
  return response.data;
};*/

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = "https://keto-diet.p.rapidapi.com";

const headers = {
  'x-rapidapi-key': '821cf30a80mshfc082b8879a1590p11926djsn23dc9a54a56e',
  'x-rapidapi-host': 'keto-diet.p.rapidapi.com'
};

const request = (url: string) => ({
  url,
  headers
});

export const RecipeApi = createApi({
  reducerPath: "RecipeApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getRecipeData: builder.query({
      query: ({ lt, gt }) => request(`/?fat_in_grams__lt=${lt}&fat_in_grams__gt=${gt}`)
    })
  })
});

export const { useGetRecipeDataQuery } = RecipeApi;
