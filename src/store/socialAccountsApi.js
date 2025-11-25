import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const socialAccountApi = createApi({
  reducerPath: 'socialAccountApi',
  baseQuery:baseQuery,
  endpoints: (builder) => ({
    getSocialAccountSections: builder.query({
      query: () => 'social-accounts',
    }),
  }),
});

export const { useGetSocialAccountSectionsQuery } = socialAccountApi;