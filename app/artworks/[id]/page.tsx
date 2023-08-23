
import Image from "next/image";
import { fetchArtworks, fetchArtworkById } from "@/lib/services";
import type { Metadata, ResolvingMetadata } from 'next';
import styles from './styles.module.scss';

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const artwork = getArtworkData(id);

  return {
    title: artwork.title,
    description: artwork.desc,
  }
}

// revalidation every 60s ISR. Could be done statically if data doesn't changes
export const revalidate = 60;

// statically generate routes at build time instead of on-demand at request time.
export async function generateStaticParams() {
  const artworks = await fetchArtworks();

  return artworks.map((artwork) => ({
    id: artwork.id.toString(),
  }))
}

export async function getArtworkData(id: string) {
  const artwork = await fetchArtworkById(id);

  return artwork.data;
}

const PageArtworkDetails = ({ params }) => {
  const artwork = getArtworkData(params.id);

  return (
    <div className={styles.container}>
      <h1>{artwork.title}</h1>
      <p>{artwork.description}</p>
      <Image
        alt={`Artwork for ${artwork.name}`}
        src={artwork.img}
        width={200}
        height={200}
      />
    </div>
  );
};

export default PageArtworkDetails;
