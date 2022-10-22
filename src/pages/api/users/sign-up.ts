import { NextApiRequest, NextApiResponse } from 'next';

import { v4 as uuid } from 'uuid';

import { User } from '../../../types/User.interface';
import users from '../../../users';

type SuccessResponse = {
   message: string;
};

export default function handler(
   req: NextApiRequest,
   res: NextApiResponse<SuccessResponse>
) {
   const id = uuid();
   const newUser = { id, ...(req.body as Omit<User, 'id'>) };
   users.push(newUser);
   return res.status(204).json({ message: 'User created successfully' });
}
