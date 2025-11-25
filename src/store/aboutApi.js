import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const aboutApi = createApi({
  reducerPath: 'aboutApi',
  baseQuery:baseQuery,
  endpoints: (builder) => ({
    getAboutSections: builder.query({
      query: () => 'about-sections',
    }),
  }),
});

export const { useGetAboutSectionsQuery } = aboutApi;