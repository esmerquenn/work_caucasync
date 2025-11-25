import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";

export const servicesApi = createApi({
  reducerPath: "servicesApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => "services",
    }),
  }),
});

export const { useGetServicesQuery } = servicesApi;

