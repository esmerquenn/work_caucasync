import { configureStore } from "@reduxjs/toolkit";
import { LayoutSlice } from "./slices/layout";
import { aboutApi } from "./aboutApi";
import { contactApi } from "./contactApi";
import { whatWeDoSectionApi } from "./whatWeDoSectionsApi";
import { mainSliderApi } from "./mainSlidersApi";
import { howWeDoStepsApi } from "./howWeWorkStepsApi";
import { pageHeadersApi } from "./pageHeadersApi";
import { partnerApi } from "./partnersApi";
import { socialAccountApi } from "./socialAccountsApi";
import { settingsApi } from "./settingsApi";
import { servicesApi } from "./servicesApi";
export const store = configureStore({
  reducer: {
    [LayoutSlice.name]: LayoutSlice.reducer,
    [aboutApi.reducerPath]: aboutApi.reducer,
    [settingsApi.reducerPath]: settingsApi.reducer,
    [socialAccountApi.reducerPath]: socialAccountApi.reducer,
    [partnerApi.reducerPath]: partnerApi.reducer,
    [pageHeadersApi.reducerPath]: pageHeadersApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [howWeDoStepsApi.reducerPath]: howWeDoStepsApi.reducer,
    [mainSliderApi.reducerPath]: mainSliderApi.reducer,
    [whatWeDoSectionApi.reducerPath]: whatWeDoSectionApi.reducer,
    [servicesApi.reducerPath]: servicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      aboutApi.middleware,
      contactApi.middleware,
      whatWeDoSectionApi.middleware,
      mainSliderApi.middleware,
      howWeDoStepsApi.middleware,
      pageHeadersApi.middleware,
      partnerApi.middleware,
      socialAccountApi.middleware,
      settingsApi.middleware,
      servicesApi.middleware
    ),
});
