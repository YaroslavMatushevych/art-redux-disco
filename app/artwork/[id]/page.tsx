
// import { fetchArtworks, fetchArtworkById } from "@/lib/services";
// import type { Metadata, ResolvingMetadata } from 'next';
import styles from './styles.module.scss';
import ArtworkDetails from "@/components/ArtworkDetails/ArtworkDetails";

interface PageArtworkDetailsProps {
  params: {
    id: string
  }
}

// OPTION WITH STATIC RENDER, MY PREFFERABLE
// interface MetadataProps {
//   params: { id: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }

// export async function generateMetadata(
//   { params, searchParams }: MetadataProps,
//   parent?: ResolvingMetadata
// ): Promise<Metadata> {
//   const id = params.id;
//   const artwork = await getArtworkData(id);

//   return {
//     title: artwork.title,
//     description: artwork.artist_display,
//   }
// }

// // revalidation every 60s ISR. Could be done statically if data doesn't changes
// export const revalidate = 60;

// // statically generate routes at build time instead of on-demand at request time.
// export async function generateStaticParams() {
//   const artworks = await fetchArtworks();

//   return artworks.data.map((artwork) => ({
//     id: artwork.id.toString(),
//   }))
// }

// export async function getArtworkData(id: string) {
//   const artwork = await fetchArtworkById(id);

//   return artwork.data;
// }

const PageArtworkDetails: React.FC<PageArtworkDetailsProps> = async ({ params }) => {
  return (
    <div className={styles.container}>
      <ArtworkDetails id={params.id} />
    </div>
  );
};

export default PageArtworkDetails;
