import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
    reducerPath: 'baseapi',
    baseQuery: fetchBaseQuery(
      { 
        baseUrl: 'https://api-nba-v1.p.rapidapi.com/',
        prepareHeaders: (headers) => {
          headers.set('X-RapidAPI-Key','dac7bd3723msh893ed925430f76bp10e447jsnb8ee6595c0fb');
          headers.set('X-RapidAPI-Host', 'api-nba-v1.p.rapidapi.com');
          return headers;
        },
      }),
      endpoints: () => ({})
  });
  