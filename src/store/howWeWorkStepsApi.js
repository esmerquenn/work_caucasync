import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const howWeDoStepsApi = createApi({
  reducerPath: 'howWeDoStepsApi',
  baseQuery:baseQuery,
  endpoints: (builder) => ({
    getHowWeDoStepsSections: builder.query({
      query: () => 'how-we-work-steps',
    }),
  }),
});

export const { useGetHowWeDoStepsSectionsQuery } = howWeDoStepsApi;