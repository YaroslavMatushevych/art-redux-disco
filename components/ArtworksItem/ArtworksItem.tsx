'use client'
import React from 'react'
import Link from 'next/link'
import { Artwork } from '@/lib/interfaces'
import { substrStringByComma } from '@/lib/utils/substrStringByComma'
import styles from './ArtworksItem.module.scss'

interface ArtworksItemProps {
  artwork: Artwork;
}

const ArtworkDetails: React.FC<ArtworksItemProps> = ({ artwork }) => {
  // it recalculates on every rerender so we could memoize it if it was expensive op.
  const substredTitle = substrStringByComma(artwork.title);

  return (
    <Link href={`/artwork/${artwork.id}`}>
      {/* I would use Image for optimization from next but for now it is not critical */}
      {/* ideally should be used lazy loading */}
      <figure
        style={{ backgroundImage: `url(https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg)` }}
        className={styles.figure}
      >
        <figcaption>{substredTitle}</figcaption>
      </figure>
    </Link>
  )
}

export default ArtworkDetails
