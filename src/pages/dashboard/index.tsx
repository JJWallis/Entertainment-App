import Image from 'next/image';
import Link from 'next/link';

import axios from 'axios';

import {
   NavBar,
   NavBarNavigation,
   NavigationListItem,
} from '../../components/styled/NavBar.styled';
import HomeIcon from '../../components/icon/HomeIcon';
import IconAvatar from '../../assets/image-avatar.png';
import TvIcon from '../../components/icon/TvIcon';
import BookmarkIcon from '../../components/icon/BookmarkIcon';
import MoviesIcon from '../../components/icon/MoviesIcon';
import { User } from '../../context/userContext';

interface Props extends Partial<User> {
   status: 'success' | 'fail';
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

const Dashboard: React.FC<Props> = ({ status }) => {
   return (
      <main>
         <NavBar>
            {status === 'fail' ? (
               <p>error fetching user data!</p>
            ) : (
               <>
                  <div>Logo</div>
                  <NavBarNavigation>
                     <ul>
                        {[
                           [HomeIcon, '/'],
                           [MoviesIcon, '/movies'],
                           [TvIcon, '/tv'],
                           [BookmarkIcon, '/bookmarks'],
                        ].map(([icon, path], idx) => (
                           <Link href={path} key={idx}>
                              <NavigationListItem
                                 key={idx}
                                 dangerouslySetInnerHTML={{ __html: icon }}
                              ></NavigationListItem>
                           </Link>
                        ))}
                     </ul>
                  </NavBarNavigation>
                  <div>
                     <Image
                        src={IconAvatar}
                        alt="user profile"
                        width="30"
                        height="30"
                     />
                  </div>
               </>
            )}
         </NavBar>
      </main>
   );
};

export default Dashboard;
