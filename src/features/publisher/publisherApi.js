import apiSlice from "../api/apislice";

const publisherApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPublishers: builder.query({
            query: () => '/publisher',
        }),
        singlePublisher: builder.query({
            query: (id) => `/publisher/${id}`
        }),
        updatePublisher : builder.mutation({
            query: ({_id, name}) => ({
                url: `publisher/${_id}`,
                method: 'PATCH',
                body: name,
            })
        })
    })
})

export const { useGetPublishersQuery, useSinglePublisherQuery, useUpdatePublisherMutation } = publisherApi