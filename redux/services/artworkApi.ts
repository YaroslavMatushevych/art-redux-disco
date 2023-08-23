import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Artwork } from '@/lib/interfaces'

// we can place it to the env file as well
const CORS_PROXY = 'https://corsproxy.io/?'
const BASE_URL = 'https://api.artic.edu/api/v1/'

export const artworkApi = createApi({
  reducerPath: 'artworkApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${CORS_PROXY}${BASE_URL}`
  }),
  endpoints: builder => ({
    getArtworks: builder.query<{ data: Artwork[] }, null>({
      query: () => 'artworks'
    }),
    getArtworkById: builder.query<{ data: Artwork }, { id: string }>({
      query: ({ id }) => `artworks/${id}`
    })
  })
})

export const { useGetArtworksQuery, useGetArtworkByIdQuery } = artworkApi
