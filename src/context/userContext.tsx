import { createContext } from 'react';

type UserStatus = User | null;

export interface User {
   name: string;
   username: string;
   email: string;
   profileImage: string;
}

interface UserContextProviderProps {
   children: React.ReactNode;
   user: UserStatus;
}

export const UserContext = createContext<UserStatus>(null);

export const UserContextProvider: React.FC<UserContextProviderProps> = ({
   children,
   user,
}) => <UserContext.Provider value={user}>{children}</UserContext.Provider>;
