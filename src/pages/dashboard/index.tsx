import axios from 'axios';

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

const Dashboard: React.FC<Props> = ({ status }) => {
   return (
      <main>
         <NavigationBar status={status} />
      </main>
   );
};

export default Dashboard;
