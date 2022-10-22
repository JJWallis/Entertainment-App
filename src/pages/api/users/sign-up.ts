import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid';

import { User, UserWithoutId } from '../../../types/User.interface';
import users from '../../../users';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
   const id = uuid();
   const newUser: User = { id, ...(req.body as UserWithoutId) };
   users.push(newUser);
   return res.redirect('/dashboard/recommended');
}
