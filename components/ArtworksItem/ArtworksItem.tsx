'use client'
import React from 'react'
import Link from 'next/link'
import { Artwork } from '@/lib/interfaces'
import './ArtworksItem.scss'

interface ArtworksItemProps {
  artwork: Artwork;
}

const ArtworksItem: React.FC<ArtworksItemProps> = ({ artwork }) => {
  return (
    <li key={artwork.id}>
      <Link href={`/artwork/${artwork.id}`}>
        {artwork.title}
      </Link>
    </li>
  )
}

export default ArtworksItem
