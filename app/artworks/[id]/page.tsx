
import Image from "next/image";
import { fetchArtworks, fetchArtworkById } from "@/lib/services";
import type { Metadata, ResolvingMetadata } from 'next';
import styles from './styles.module.scss';

interface MetadataProps {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: MetadataProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const artwork = await getArtworkData(id);

  return {
    title: artwork.title,
    description: artwork.artist_display,
  }
}

// revalidation every 60s ISR. Could be done statically if data doesn't changes
export const revalidate = 60;

// statically generate routes at build time instead of on-demand at request time.
export async function generateStaticParams() {
  const artworks = await fetchArtworks();

  return artworks.data.map((artwork) => ({
    id: artwork.id.toString(),
  }))
}

export async function getArtworkData(id: string) {
  const artwork = await fetchArtworkById(id);

  return artwork.data;
}

const PageArtworkDetails = async ({ params }: { params: { id: string } }) => {
  const artwork = await getArtworkData(params.id);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{artwork.title}</h1>
      <p className={styles.p}>{artwork.artist_display}</p>
      <Image
        alt={`Artwork for ${artwork.title}`}
        src={`https://www.artic.edu/iiif/2/${artwork.image_id}`}
        width={200}
        height={200}
        className={styles.img}
      />
    </div>
  );
};

export default PageArtworkDetails;
