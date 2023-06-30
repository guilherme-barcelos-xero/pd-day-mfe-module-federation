import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface ICartItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
  quantity: number;
}

interface ICart {
  cartItems: ICartItem[];
}

// Define a service using a base URL and expected endpoints
export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    getCart: builder.query<ICart, void>({
      providesTags: ['Cart'],
      query: (name) => '/cart'
    }),
    addToCart: builder.mutation<void, number>({
      invalidatesTags: ['Cart'],
      query: (id: number) => ({
        method: "POST",
        url: `/cart`,
        body: JSON.stringify({ id })
      }),
    }),
    clearCart: builder.mutation<void, void>({
      invalidatesTags: ['Cart'],
      query: () => ({
        method: "DELETE",
        url: `/cart`,
      }),
    })
  }),
})

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useClearCartMutation
} = cartApi