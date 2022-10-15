import type { NextPage } from 'next';

import LoginScreen from '../components/Login';
import RenderPage from '../components/page/RenderPage';

const Home: NextPage = () => {
   return (
      <RenderPage>
         <main>
            <LoginScreen />
         </main>
      </RenderPage>
   );
};

export default Home;
