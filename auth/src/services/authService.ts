import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setJwtToken } from './utils';

export interface ILoginRequest {
  user: string;
  password: string;
};

export interface ILoginResponse {
  access_token: string;
}

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, ILoginRequest>({
      query: (req: ILoginRequest) => ({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        url: `/auth/login`,
        body: JSON.stringify({ 
          username: req.user,
          password: req.password
        }),
      }),
      transformResponse: (res: ILoginResponse) => {
        setJwtToken(res.access_token);
        return res;
      }
    }),
  }),
});

export const {
  useLoginMutation
} = authApi;