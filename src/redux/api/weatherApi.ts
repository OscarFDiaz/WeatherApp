import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
  reducerPath: 'weather',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.weatherapi.com/v1',
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: ({ lat, long, key }) =>
        `/forecast.json?key=${key}&q=${lat},${long}&days=6&aqi=no&alerts=no`,
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
