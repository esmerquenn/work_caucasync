import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const mainSliderApi = createApi({
  reducerPath: 'mainSliderApi',
  baseQuery:baseQuery,
  endpoints: (builder) => ({
    getMainSliderSections: builder.query({
      query: () => 'main-sliders',
    }),
  }),
});

export const { useGetMainSliderSectionsQuery } = mainSliderApi;