// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import FirebaseAdmin from '../../models/firebase_admin';

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  // firebase의 'test'콜렉션에 접근
  FirebaseAdmin.getInstance().Firebase.collection('test');
  res.status(200).json({ name: 'John Doe' });
}
