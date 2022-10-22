import { NextApiRequest, NextApiResponse } from 'next';

import { User } from '../../../types/User.interface';
import users from '../../../users';

export default function handler(
   _req: NextApiRequest,
   res: NextApiResponse<User[]>
) {
   return res.status(200).json(users);
}
