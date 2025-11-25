import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './baseQuery';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getContactSections: builder.query({
      query: () => 'contacts',
      transformResponse: (response) => {
        if (response.success && response.data && response.data.length > 0) {
          const activeContact = response.data.find(item => item.status === true);
          if (activeContact) {
            const { phone, email, address, location, workhours } = activeContact;
            return {
              phone,
              email,
              address,
              location,
              workhours,
            };
          }
        }
        return {}; 
      },
    }),
  }),
});

export const { useGetContactSectionsQuery } = contactApi;