import Image from 'next/image';

import axios from 'axios';

import {
   NavBar,
   NavBarNavigation,
} from '../../components/styled/NavBar.styled';
import IconHome from '../../assets/icon-nav-home.svg';
import IconMovie from '../../assets/icon-nav-movies.svg';
import IconTv from '../../assets/icon-nav-tv-series.svg';
import IconBookmark from '../../assets/icon-nav-bookmark.svg';
import IconAvatar from '../../assets/image-avatar.png';

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
                        {[IconHome, IconMovie, IconTv, IconBookmark].map(
                           (icon, idx) => (
                              <li key={idx}>
                                 <Image src={icon} alt="" />
                              </li>
                           )
                        )}
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
