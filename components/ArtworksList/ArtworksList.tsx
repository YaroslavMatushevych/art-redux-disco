'use client'
import React from 'react';
import ArtworksItem from '../ArtworksItem/ArtworksItem'
import { useGetArtworksQuery } from "@/redux/services/artworkApi";
import { Artwork } from '@/lib/interfaces';
import styles from './ArtworksList.module.scss';

const ArtworksList = () => {
  const { isLoading, isFetching, data: responseData, error } = useGetArtworksQuery(null);

  if (error) return <p>Oh no, there was an error</p>;
  if (isLoading || isFetching) return <p className={styles.loading}>Loading...</p>;
  if (!responseData) return <p>No data available</p>;

  const { data: artworks } = responseData;

  return artworks.map((artwork: Artwork) => <ArtworksItem key={artwork.id} artwork={artwork} />)
}

export default ArtworksList
