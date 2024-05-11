// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  username: string; //sebelah kiri keyname  //kanan tipe nya
  hometown: string[]; //indicator array of string
};

// lifecycle API
// User kirim request -> server (Node/NextJS) -> request data parameter handler di bawah [line12] -> response untuk kirim data kembali ke user
export default function handler( // ini yang pertama, handler ini bisa apa aja, untuk keperluan kalau error
  request: NextApiRequest, // request : data yang dikirim oleh browser atau user
  response: NextApiResponse<Data>
) {
  response.status(200).json({ username: 'rkzbo', hometown: ['Gunungkidul'] });
}
