// we can place it to the env file as well
const CORS_PROXY = 'https://corsproxy.io/?'
const BASE_URL = 'https://api.artic.edu/api/v1/artworks'

// Fetching all artworks
const fetchArtworks = async () => {
  const response = await fetch(`${CORS_PROXY}${BASE_URL}`)

  if (!response.ok) throw new Error('fetch failed')

  return response.json()
}

// Fetching individual artwork by ID
const fetchArtworkById = async (id: string) => {
  const response = await fetch(`${CORS_PROXY}${BASE_URL}/${id}`)

  if (!response.ok) throw new Error('fetch failed')

  return response.json()
}

export { fetchArtworks, fetchArtworkById }
