import { StaticImageData } from 'next/image';

export interface User {
   id: string;
   email: string;
   password: string;
   profileImage: string | StaticImageData;
}

export type UserWithoutId = Omit<User, 'id'>;
