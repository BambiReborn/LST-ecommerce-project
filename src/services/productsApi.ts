// IMPORT //

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// PRODUCT TYPE //
export type Product = {
    id: number
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    thumbnail: string
    images: string[]

    reviews: {
        rating: number
        comment: string
        date: string
        reviewerName: string
        reviewerEmail: string
    }[]
}


// API RESPONSE TYPE //
type ProductsResponse = {
    products: Product[]
    total: number
    skip: number
    limit: number
}


// PRODUCTS API //
export const productsApi = createApi({
    reducerPath: 'productsApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com',
    }),

    endpoints: function (builder) {
        return {
            getProducts: builder.query<ProductsResponse, void>({
                query: function () {
                    return '/products'
                },
            }),
        }
    },
})


export const {
    useGetProductsQuery
} = productsApi