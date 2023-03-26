import apiSlice from "../api/apislice";

const bookApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/book',
        }),
        getSingleBook: builder.query({
            query: (id) => `/book/${id}`
        })
    })
})

export const {useGetBooksQuery, useGetSingleBookQuery } = bookApi