import { createContext } from 'react';
import { User } from '../types/User.interface';

type UserStatus = User | null;

interface UserContextProviderProps {
   children: React.ReactNode;
   user: UserStatus;
}

export const UserContext = createContext<UserStatus>(null);

export const UserContextProvider: React.FC<UserContextProviderProps> = ({
   children,
   user,
}) => <UserContext.Provider value={user}>{children}</UserContext.Provider>;
