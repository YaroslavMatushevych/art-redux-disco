import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchArtworks, fetchArtworkById } from '@lib/services'

// Thunks for asynchronous actions to fetch artworks and individual artwork details
export const getArtworks = createAsyncThunk(
  'artworks/getArtworks',
  async () => {
    const response = await fetchArtworks()
    return response.data
  }
)

export const getArtworkDetail = createAsyncThunk(
  'artworks/getArtworkDetail',
  async id => {
    const response = await fetchArtworkById(id)
    return response.data
  }
)

// Redux slice for artworks. This maintains the state for artworks and their details.
// If the application doesn't require global state for artworks, we could use Next.js's
// static rendering methods like getStaticProps to fetch this data at build time.
const artworksSlice = createSlice({
  name: 'artworks',
  initialState: {
    items: [],
    detail: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getArtworks.pending, state => {
        state.status = 'loading'
      })
      .addCase(getArtworks.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(getArtworks.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(getArtworkDetail.pending, state => {
        state.status = 'loading'
      })
      .addCase(getArtworkDetail.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.detail = action.payload
      })
      .addCase(getArtworkDetail.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default artworksSlice.reducer
