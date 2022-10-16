import { NextPage } from 'next';
import { useRouter } from 'next/router';

import data from '../../data.json';
import MediaGallery from '../../components/media-gallery';
import NavigationBar from '../../components/navbar/Navbar';
import Search from '../../components/search';

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
   const { media } = query;
   const mediaType = media as string;

   const collectMediaBasedOnRoute = () =>
      data.filter(({ category, isBookmarked }) => {
         const currCategory = category.toLowerCase();
         const mediaTypes = ['movie', 'tv'];

         if (mediaTypes.includes(mediaType)) {
            return currCategory.includes(mediaType);
         } else if (mediaType === 'recommended') {
            return mediaTypes.includes(currCategory);
         } else {
            return !!isBookmarked;
         }
      });

   const relevantMediaData = collectMediaBasedOnRoute();

   return (
      <main>
         <NavigationBar activeMediaType={mediaType} />
         <Search />
         <MediaGallery
            title={mediaType}
            relevantMediaData={relevantMediaData}
         />
      </main>
   );
};

export default Dashboard;
