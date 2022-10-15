import Image from 'next/image';

import axios from 'axios';

import RenderPage from '../../components/page/RenderPage';
import {
   NavBar,
   NavBarNavigation,
} from '../../components/styled/NavBar.styled';
import { User } from '../../context/userContext';

interface Props extends User {
   status: 'success' | 'fail';
}

interface Photo {
   url: string;
}

export const getStaticProps = async () => {
   try {
      const [userResponse, photosResponse] = await Promise.all([
         axios.get('https://jsonplaceholder.typicode.com/users'),
         axios.get('https://jsonplaceholder.typicode.com/photos'),
      ]);

      const userData: User[] = userResponse.data;
      const photoData: Photo[] = photosResponse.data;

      const profileImage = photoData[0].url;
      const { email, name, username } = userData[0];

      return {
         props: {
            status: 'success',
            profileImage,
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

const Dashboard: React.FC<Props> = ({
   email,
   name,
   username,
   profileImage,
   status,
}) => {
   console.log({ profileImage });
   return (
      <RenderPage>
         <main>
            <NavBar>
               {status === 'fail' ? (
                  <p>error fetching user data!</p>
               ) : (
                  <>
                     <div>Logo</div>
                     <NavBarNavigation>
                        <ul>
                           <li>{email}</li>
                           <li>{name}</li>
                           <li>{username}</li>
                        </ul>
                     </NavBarNavigation>
                     <div>
                        <Image
                           src={profileImage}
                           alt="user profile"
                           layout="fill"
                        />
                     </div>
                  </>
               )}
            </NavBar>
         </main>
      </RenderPage>
   );
};

export default Dashboard;
