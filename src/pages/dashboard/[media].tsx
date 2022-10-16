import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import MediaGallery from '../../components/media-gallery';

import NavigationBar from '../../components/navbar/Navbar';

import { User } from '../../context/userContext';

export type ResponseStatus = 'success' | 'fail';

interface Props extends Partial<User> {
   status: ResponseStatus;
}

interface GetStaticProps {
   props: Props;
}

export const getStaticProps = async (): Promise<GetStaticProps> => {
   try {
      const { data: userData }: { data: User[] } = await axios.get(
         'https://jsonplaceholder.typicode.com/users'
      );

      const { email, name, username } = userData[0];

      return {
         props: {
            status: 'success',
            email,
            name,
            username,
         },
      };
   } catch (error) {
      console.error(error);
      return {
         props: {
            status: 'fail',
         },
      };
   }
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

const Dashboard: NextPage<Props> = ({ status }) => {
   const { query } = useRouter();
   const { media } = query;

   return (
      <main>
         <NavigationBar status={status} activeMediaType={media as string} />
         <input type="text" placeholder="Search for TV Series" />
         <MediaGallery title={media as string} />
      </main>
   );
};

export default Dashboard;
