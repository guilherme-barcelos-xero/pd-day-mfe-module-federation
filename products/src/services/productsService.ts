// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: (name) => 'products',
    }),
    getProduct: builder.query<IProduct, string>({
      query: (id) => `products/${id}`,
    }),
  }),
});


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductQuery, useGetProductsQuery } = productsApi