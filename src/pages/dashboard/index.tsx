import Image from 'next/image';
import RenderPage from '../../components/page/RenderPage';
import {
   NavBar,
   NavBarNavigation,
} from '../../components/styled/NavBar.styled';
import { User } from '../../context/userContext';

type Props = User;

const Dashboard: React.FC<Props> = ({
   email,
   name,
   username,
   profileImage,
}) => {
   return (
      <RenderPage>
         <NavBar>
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
                  layout="responsive"
               />
            </div>
         </NavBar>
         <main></main>
      </RenderPage>
   );
};

export default Dashboard;
