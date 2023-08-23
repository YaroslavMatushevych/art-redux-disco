import Link from 'next/link';
import { fetchArtworks } from "@/lib/services";
import styles from './styles.module.scss';

interface Artwork {
  id: number;
  title: string;
  description: string;
  image_url: string;
}

// revalidation every 60s ISR. Could be done statically if data doesn't changes
export const revalidate = 60;

export async function getArtworksData() {
  const artwork = await fetchArtworks();

  return artwork.data;
}

const PageArtworksList = async () => {
  const artworks = await getArtworksData();

  return (
    <div className={styles.container}>
      <h1>Artworks</h1>
      <ul>
        {artworks.map(artwork => (
          <li key={artwork.id}>
            <Link href={`/artwork/${artwork.id}`}>
              {artwork.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageArtworksList;
