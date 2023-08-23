import Link from 'next/link';
import { fetchArtworks } from "@/lib/services";
import { Artwork } from '@/lib/interfaces';
import ArtworksList from '@/components/ArtworksList/ArtworksList';
import styles from './styles.module.scss';

// revalidation every 60s, ISR. Could be done statically if data doesn't changes.
// or if data is changing dynamicaly we should use no-cache strategy
export const revalidate = 60;

export async function getArtworksData(): Promise<Artwork[]> {
  const artworks = await fetchArtworks();
  return artworks.data;
}

const HomeGallery = async () => {
  const artworks = await getArtworksData();

  return (
    <div className={styles.container}>
      <ArtworksList artworks={artworks} />
    </div>
  );
};

export default HomeGallery;
