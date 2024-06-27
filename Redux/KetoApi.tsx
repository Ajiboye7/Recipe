import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";

const baseUrl = "https://keto-diet.p.rapidapi.com"

const headers = {
     'x-rapidapi-key': 'cdd55f2df6msh1337361e79a64f1p1b12c6jsn48d27f4e316a',
     'x-rapidapi-host': 'keto-diet.p.rapidapi.com'
}

const request = (url) =>({
    url,
    headers:headers,
});

export const ketoApi = createApi({
    reducerPath :"ketoApi",
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getketoData: builder.query({
            query: ()
        })
    })
})