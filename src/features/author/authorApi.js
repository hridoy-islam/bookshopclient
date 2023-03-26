import apiSlice from "../api/apislice";

const authorApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAuthors: builder.query({
            query: () => '/author',
        }),
        singleAuthor: builder.query({
            query: (id) => `/author/${id}`,
        }),
        updateAuthor: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `author/${id}`,
                method: 'PATCH',
                body: rest
            })
        }),
    })
})

export const { useGetAuthorsQuery, useSingleAuthorQuery, useUpdateAuthorMutation } = authorApi