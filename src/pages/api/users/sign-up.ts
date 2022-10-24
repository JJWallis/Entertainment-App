import { readFileSync, promises } from 'fs';

import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid';

import { User, UserWithoutId } from '../../../types/User.interface';

const users: User[] = JSON.parse(readFileSync('../../../users.json', 'utf-8'));

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   try {
      if (req.method === 'POST') {
         const id = uuid();
         const newUser: User = { id, ...(req.body as UserWithoutId) };

         console.log('BEFORE:', { users });
         users.push(newUser);
         console.log('AFTER:', { users });

         await promises.writeFile('../../../users.json', JSON.stringify(users));
         res.status(200).json({ message: 'User created successfully' });
      }
   } catch (error: unknown) {
      console.error(error);
      if (error instanceof Error)
         res.status(400).json({ message: error.message });
   }
}
