'use client'
import React from 'react'
import Link from 'next/link'
import { Artwork } from '@/lib/interfaces'
import './ArtworksItem.scss'

interface ArtworksItemProps {
  artwork: Artwork;
}

const ArtworksItem: React.FC<ArtworksItemProps> = ({ artwork }) => {
  const substredTitle = artwork.title.substring(0, artwork.title.indexOf(','));

  return (
    <Link href={`/artwork/${artwork.id}`}>
      <figure style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1593414220166-085caeae0382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80)' }}>
        <figcaption>{substredTitle}</figcaption>
      </figure>
    </Link>
    // <li key={artwork.id}>
    //   <Link href={`/artwork/${artwork.id}`}>
    //     {artwork.title}
    //   </Link>
    // </li>
  )
}

export default ArtworksItem
