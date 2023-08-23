import Link from 'next/link';
import { fetchArtworks } from "@/lib/services";
import { Artwork } from '@/lib/interfaces';
import ArtworksList from '@/components/ArtworksList/ArtworksList';
import styles from './styles.module.scss';

// revalidation every 60s, ISR. Could be done statically if data doesn't changes
export const revalidate = 60;

export async function getArtworksData(): Promise<Artwork[]> {
  const artworks = await fetchArtworks();
  console.log(artworks)
  return artworks.data;
}

const PageArtworksList = async () => {
  const artworks = await getArtworksData();

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Artworks</h1>
      <ArtworksList artworks={artworks} />
    </div>
  );
};

export default PageArtworksList;
