import { NextPage } from 'next';
import { useRouter } from 'next/router';

import data from '../../data.json';
import MediaGallery from '../../components/media-gallery';
import NavigationBar from '../../components/navbar/Navbar';

export const getStaticProps = async () => {
   return {
      props: {},
   };
};

export async function getStaticPaths() {
   return {
      paths: [
         { params: { media: 'recommended' } },
         { params: { media: 'movies' } },
         { params: { media: 'tv' } },
         { params: { media: 'bookmarks' } },
      ],
      fallback: false,
   };
}

const Dashboard: NextPage = () => {
   const { query } = useRouter();
   const { media: mediaType } = query;

   const collectRelevantMediaData = () =>
      data.filter(({ category, isBookmarked }) => {
         if (['movie', 'tv'].includes(mediaType as string)) {
            return category.includes(mediaType as string);
         } else if (mediaType === 'recommended') {
            return ['movie', 'tv'].includes(category);
         } else {
            return isBookmarked;
         }
      });

   const relevantMediaData = collectRelevantMediaData();

   console.log({ relevantMediaData });

   return (
      <main>
         <NavigationBar activeMediaType={mediaType as string} />
         <input type="text" placeholder="Search for TV Series" />
         <MediaGallery
            title={mediaType as string}
            relevantMediaData={relevantMediaData}
         />
      </main>
   );
};

export default Dashboard;
