import { NextPage } from 'next';
import { useRouter } from 'next/router';

import data from '../../data.json';
import MediaGallery from '../../components/media-gallery';
import NavigationBar from '../../components/navbar/Navbar';
import Search from '../../components/search';
import {
   DashboardMainContainer,
   GalleryContainer,
} from '../../components/styled/Wrappers.styled';
import TrendingGallery from '../../components/media-gallery/TrendingGallery';
import { useState } from 'react';
import { FilmData } from '../../types/Film.interface';
import Film from '../../components/film';

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
   const [userSearch, setUserSearch] = useState('');
   const [userResults, setUserResults] = useState<FilmData[]>([]);

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

   console.log({ isRecommended });

   return (
      <DashboardMainContainer>
         <NavigationBar activeMediaType={mediaType} />
         <Search
            relevantMediaData={relevantMediaData}
            userResults={userResults}
            setUserResults={setUserResults}
            userSearch={userSearch}
            setUserSearch={setUserSearch}
         />
         {userResults.length || userSearch ? (
            <GalleryContainer>
               {userResults.map((media, idx) => (
                  <Film key={idx} {...media} />
               ))}
            </GalleryContainer>
         ) : (
            <>
               {isRecommended && (
                  <TrendingGallery relevantMediaData={relevantMediaData} />
               )}
               <MediaGallery
                  title={mediaType}
                  relevantMediaData={relevantMediaData}
               />
            </>
         )}
      </DashboardMainContainer>
   );
};

export default Dashboard;
