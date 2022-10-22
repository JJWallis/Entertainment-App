import { NextApiRequest, NextApiResponse } from 'next';

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
   switch (req.method) {
      case 'GET': {
         // get specific user for profile image
         break;
      }
      default:
         break;
   }
}
