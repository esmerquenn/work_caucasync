import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";

export const partnerApi = createApi({
  reducerPath: "partnerApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getPartnerSections: builder.query({
      query: () => "partners",
    }),
  }),
});

export const {useGetPartnerSectionsQuery} = partnerApi;
