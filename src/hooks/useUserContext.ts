import { useContext } from 'react';
import { UserContext } from '../context/userContext';

export const useUserContext = () => {
   const userContext = useContext(UserContext);
   if (!userContext)
      throw new Error('Cannot use userContext outside of its provider range!');
   return userContext;
};
