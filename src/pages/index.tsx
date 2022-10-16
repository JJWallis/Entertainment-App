import type { NextPage } from 'next';

import LoginScreen from '../components/Login';

const Home: NextPage = () => {
   return (
      <main>
         <LoginScreen />
      </main>
   );
};

export default Home;
