import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const pageHeadersApi = createApi({
  reducerPath: 'pageHeadersApi',
  baseQuery:baseQuery,
  endpoints: (builder) => ({
    getPageHeadersSections: builder.query({
      query: () => 'page-headers',
    }),
  }),
});

export const { useGetPageHeadersSectionsQuery } = pageHeadersApi;