import Image from 'next/image';

import axios from 'axios';

import {
   NavBar,
   NavBarNavigation,
} from '../../components/styled/NavBar.styled';
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
            profileImage: 'https://via.placeholder.com/800.png',
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
                        <li>{email}</li>
                        <li>{name}</li>
                        <li>{username}</li>
                     </ul>
                  </NavBarNavigation>
                  <div>
                     <Image
                        src={profileImage as string}
                        alt="user profile"
                        layout="responsive"
                        width="800"
                        height="800"
                     />
                  </div>
               </>
            )}
         </NavBar>
      </main>
   );
};

export default Dashboard;
