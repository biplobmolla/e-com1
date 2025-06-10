// lib/redux/apiSlice.ts
import {
  SigninPropsType,
  type APIResponsePropsType,
  type SignupPropsType,
} from "@/types/auth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
  endpoints: (builder) => ({
    signup: builder.mutation<APIResponsePropsType, SignupPropsType>({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
    signin: builder.mutation<APIResponsePropsType, SigninPropsType>({
      query: (data) => ({
        url: "/auth/signin",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSignupMutation, useSigninMutation } = authApi;
