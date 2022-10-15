import type { NextPage } from 'next';

import LoginScreen from '../components/Login';
import RenderPage from '../components/page/RenderPage';

const Home: NextPage = () => {
   return (
      <RenderPage>
         <LoginScreen />
      </RenderPage>
   );
};

export default Home;
