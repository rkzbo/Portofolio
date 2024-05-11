// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string; //sebelah kiri keyname  //kanan tipe nya
  schools: string[]; //indicator array of string
};

// lifecycle API
// User kirim request -> server (Node/NextJS) -> request data parameter handler di bawah [line12] -> response untuk kirim data kembali ke user
export default function handler( // ini yang pertama, handler ini bisa apa aja, untuk keperluan kalau error
  request: NextApiRequest, // request : data yang dikirim oleh browser atau user
  response: NextApiResponse<Data>
) {
  response.status(200).json({ name: 'John Doe', schools: ['SD 1', 'SMP 2', 'SMK 3'] });
  // {"name":"John Doe"}
}

// HTTP status code https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// HTTP Code 1xx, 2xx, 3xx, 4xx, 5xx
// 1xx informational
// 2xx success
// 3xx redirect
// 4xx 5xx server error//browser sama dengan localhost:3000/api/hello
// 4xx data error yang tampil dikirim dari browser

// response : yang kita kirim ke browser
// request : data yang dikirim oleh browser atau data yang dikirim oleh user [contohnya ketika user ketik url di browser]

// pertukaran data front-end & back-end pakai json
// json adalah javascript object notation - reprentasi data asalnya dari javascript
