import RenderPage from '../../components/page/RenderPage';
import {
   NavBar,
   NavBarNavigation,
} from '../../components/styled/NavBar.styled';

const Dashboard: React.FC = () => {
   return (
      <RenderPage>
         <NavBar>
            <div>Logo</div>
            <NavBarNavigation>
               <ul>
                  <li>Route</li>
                  <li>Route</li>
                  <li>Route</li>
                  <li>Route</li>
               </ul>
            </NavBarNavigation>
            <div>User profile</div>
         </NavBar>
         <main></main>
      </RenderPage>
   );
};

export default Dashboard;
