import { NextPage } from 'next';
import { useRouter } from 'next/router';

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
   const { media } = query;

   return (
      <main>
         <NavigationBar activeMediaType={media as string} />
         <input type="text" placeholder="Search for TV Series" />
         <MediaGallery title={media as string} />
      </main>
   );
};

export default Dashboard;
