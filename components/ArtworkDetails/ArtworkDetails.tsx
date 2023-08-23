'use client'
import React from 'react'
import Image from 'next/image'
import { useGetArtworkByIdQuery } from '@/redux/services/artworkApi'
import './ArtworkDetails.scss'
import { substrStringByComma } from '@/lib/utils/substrStringByComma'

interface ArtworkItemProps {
  id: string
}

const ArtworkDetails: React.FC<ArtworkItemProps> = ({ id }) => {
  const { isLoading, isFetching, data: responseData, error } = useGetArtworkByIdQuery({ id });

  if (error) return <p>Oh no, there was an error</p>;
  if (isLoading || isFetching) return <p>Loading...</p>;
  if (!responseData) return <p>No data available</p>

  const { data: artwork } = responseData;

  // it recalculates on every rerender so we could memoize it if it was expensive op.
  const substredTitle = substrStringByComma(artwork.title);

  return (
    <>
      <h1>Title: {substredTitle}</h1>
      <p>Artist display: {artwork.artist_display}</p>
      <Image
        alt={`Artwork for ${substredTitle}`}
        src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
        width={200}
        height={200}
        priority
      />
      <p>Publishing verification level: {artwork.publishing_verification_level}</p>
      <p>Fiscal Year: {artwork.fiscal_year}</p>
    </>
  )
}

export default ArtworkDetails
