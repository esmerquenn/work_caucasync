import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const whatWeDoSectionApi = createApi({
  reducerPath: 'whatWeDoSectionApi',
  baseQuery:baseQuery,
  endpoints: (builder) => ({
    getWhatWeDoSectionSections: builder.query({
      query: () => 'what-we-do-sections',
    }),
  }),
});

export const { useGetWhatWeDoSectionSectionsQuery } = whatWeDoSectionApi;