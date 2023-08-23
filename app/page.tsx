import ArtworksList from '@/components/ArtworksList/ArtworksList';
import styles from './styles.module.scss';

// OPTION WITH STATIC RENDER, MY PREFFERABLE
// I'd use static or server side rendering but according to the task
// we need to implement it with redux, so below I wrote the code I'd use to.

// revalidation every 60s, ISR. Could be done statically if data doesn't changes.
// export const revalidate = 60;

// export async function getArtworksData(): Promise<Artwork[]> {
//   const artworks = await fetchArtworks();
//   return artworks.data;
// }

const HomeGallery = async () => {
  return (
    <div className={styles.container}>
      <ArtworksList />
    </div>
  );
};

export default HomeGallery;
