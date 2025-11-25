import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const settingsApi = createApi({
  reducerPath: 'settingsApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getsettings: builder.query({
      query: () => 'settings',
      transformResponse: (response) => {
        if (response.success && response.data) {
          const { logo, favicon, ...rest } = response.data;
          return {
            logo: logo ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${logo}` : null,
            favicon: favicon ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${favicon}` : null,
          };
        }
        return response;
      },
    }),
  }),
});

export const { useGetsettingsQuery } = settingsApi;