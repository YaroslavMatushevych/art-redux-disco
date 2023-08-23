'use client'
import React from 'react'
import { Artwork } from '@/lib/interfaces'
import ArtworksItem from '../ArtworksItem/ArtworksItem'
import './ArtworksList.scss'

interface ArtworksListProps {
  artworks: Artwork[];
}

const ArtworksList: React.FC<ArtworksListProps> = ({ artworks }) => {
  return (
    <ul>
      {artworks.map(artwork => (
        <ArtworksItem key={artwork.id} artwork={artwork} />
      ))}
    </ul>
  )
}

export default ArtworksList
