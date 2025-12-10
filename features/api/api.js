import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,

    prepareHeaders: (headers, { endpointName }) => {
      // Skip token ONLY for auth endpoints
      if (
        typeof window !== "undefined" &&
        !["loginUser", "registerUser"].includes(endpointName)
      ) {
        const token = localStorage.getItem("token");

        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({

    // REGISTER
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: "/api/auth/signup",
        method: "POST",
        body: newUser,
      }),
    }),

    // LOGIN
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/api/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    // DASHBOARD FILTER API
    dashboardFilter: builder.mutation({
      query: (payload) => ({
        url: "/API/DASHBOARD_FILTER",
        method: "POST",
        body: payload,
      }),
    }),

    // ADD PROPERTY
    addProperty: builder.mutation({
      query: (payload) => ({
        url: "/API/ADD_PROPERTY",
        method: "POST",
        body: payload,
      }),
    }),

  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useDashboardFilterMutation,
  useAddPropertyMutation,
} = api;
