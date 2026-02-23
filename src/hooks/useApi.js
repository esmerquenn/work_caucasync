import useSWR from "swr";
import useSWRMutation from "swr/mutation";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Global fetcher
const fetcher = async (url) => {
  const res = await fetch(`${API_BASE_URL}${url}`);
  if (!res.ok) {
    const error = new Error("API request failed");
    error.status = res.status;
    throw error;
  }
  return res.json();
};

// POST fetcher for mutations
const postFetcher = async (url, { arg }) => {
  const res = await fetch(`${API_BASE_URL}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });
  if (!res.ok) {
    const error = new Error("API request failed");
    error.status = res.status;
    throw error;
  }
  return res.json();
};

// SWR default options
const defaultOptions = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  dedupingInterval: 300000, // 5 dakika
};

// ============ HOOKS ============

// About Sections
export function useGetAboutSectionsQuery() {
  const { data, error, isLoading } = useSWR("/api/v1/about-sections", fetcher, defaultOptions);
  return { data, error, isLoading };
}

// Contact Sections
export function useGetContactSectionsQuery() {
  const { data, error, isLoading } = useSWR("/api/v1/contacts", fetcher, defaultOptions);

  // Transform data to match expected format
  let transformedData = {};
  if (data?.success && data?.data?.length > 0) {
    const activeContact = data.data.find((item) => item.status === true);
    if (activeContact) {
      transformedData = {
        phone: activeContact.phone,
        email: activeContact.email,
        address: activeContact.address,
        location: activeContact.location,
        workhours: activeContact.workhours,
      };
    }
  }

  return { data: transformedData, error, isLoading };
}

// Contact Form Submit Mutation
export function useSubmitContactFormMutation() {
  const { trigger, isMutating, error, reset } = useSWRMutation(
    "/api/v1/contact-form",
    postFetcher
  );

  return [trigger, { isLoading: isMutating, error, reset }];
}

// Main Slider Sections
export function useGetMainSliderSectionsQuery() {
  const { data, error, isLoading } = useSWR("/api/v1/main-sliders", fetcher, defaultOptions);
  return { data, error, isLoading };
}

// Partner Sections
export function useGetPartnerSectionsQuery() {
  const { data, error, isLoading } = useSWR("/api/v1/partners", fetcher, defaultOptions);
  return { data, error, isLoading };
}

// Services
export function useGetServicesQuery() {
  const { data, error, isLoading } = useSWR("/api/v1/services", fetcher, defaultOptions);
  return { data, error, isLoading };
}

// Service By Slug
export function useGetServiceBySlugQuery(slug) {
  const { data, error, isLoading } = useSWR(
    slug ? `/api/v1/services/${slug}` : null,
    fetcher,
    defaultOptions
  );
  return { data, error, isLoading };
}

// Settings
export function useGetSettingsQuery() {
  const { data, error, isLoading } = useSWR("/api/v1/settings", fetcher, defaultOptions);
  return { data, error, isLoading };
}

// Social Accounts
export function useGetSocialAccountsQuery() {
  const { data, error, isLoading } = useSWR("/api/v1/social-accounts", fetcher, defaultOptions);
  return { data, error, isLoading };
}

// Page Headers Sections
export function useGetPageHeadersSectionsQuery() {
  const { data, error, isLoading } = useSWR("/api/v1/page-headers", fetcher, defaultOptions);
  return { data, error, isLoading };
}

// How We Do Steps
export function useGetHowWeDoStepsQuery() {
  const { data, error, isLoading } = useSWR("/api/v1/how-we-work-steps", fetcher, defaultOptions);
  return { data, error, isLoading };
}

// What We Do Sections
export function useGetWhatWeDoSectionsQuery() {
  const { data, error, isLoading } = useSWR("/api/v1/what-we-do-sections", fetcher, defaultOptions);
  return { data, error, isLoading };
}
