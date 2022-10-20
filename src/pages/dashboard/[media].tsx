import { NextPage } from 'next';
import { useRouter } from 'next/router';

import data from '../../data.json';
import MediaGallery from '../../components/media-gallery';
import NavigationBar from '../../components/navbar/Navbar';
import Search from '../../components/search';
import { DashboardMainContainer } from '../../components/styled/Wrappers.styled';
import TrendingGallery from '../../components/media-gallery/TrendingGallery';

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
   const isRecommended = mediaType === 'recommended';

   const collectMediaBasedOnRoute = () =>
      data.filter(({ category, isBookmarked, isTrending }) => {
         const currCategory = category.toLowerCase();
         const mediaTypes = ['movie', 'tv'];

         if (mediaTypes.includes(mediaType)) {
            return currCategory.includes(mediaType);
         } else if (isRecommended) {
            return mediaTypes.includes(currCategory) || isTrending;
         } else {
            return !!isBookmarked;
         }
      });

   const relevantMediaData = collectMediaBasedOnRoute();

   return (
      <DashboardMainContainer>
         {isRecommended && (
            <TrendingGallery relevantMediaData={relevantMediaData} />
         )}
         <NavigationBar activeMediaType={mediaType} />
         <Search />
         <MediaGallery
            title={mediaType}
            relevantMediaData={relevantMediaData}
         />
      </DashboardMainContainer>
   );
};

export default Dashboard;
