import { useEffect, useState } from 'react'; //buat ngasih tau nodejs kalau ngambil fungsi useEffet & useState di react

type ContentHelloProperties = {
  children: string; ////keyname:tipedata
}; // tipe data properties - ini adalah custom type -- kalau dibuka dan tutup pakai buka kurung "{}" namanya object

type Biodata = {
  nama: string; //keyname:tipedata
  tanggalLahir: string;
  tempatLahir: string;
};

function ContentHello(properties: ContentHelloProperties) {
  // <-- parameter fungsi, properties itu nama parameternya
  return <p>Hello Page {properties.children}</p>; //fungsi react component
} //contentHello ini punya children yang bisa dipanggil

// UI thread          ----> render HelloIndex() ----> HTML dengan "name" dan "schools" masih kosong -----> HTML berubah dengan "name" dan "schools" John Doe
//                                   |                                                                             ^
//                                   |                                                                             |
//                                   V                                                                             |
// background thread  ---->  useEffect (fetch) ----------------------------------------------------> setName, setSchools

export default function HelloIndex(): JSX.Element {
  const [name, setName] = useState(''); // pendekatan asynchronous     // value & setter
  const [schools, setSchools] = useState([]); //cara kita deklarasi variable //const = constant

  // panggil API bisa pake useEffect / useLayoutEffect
  useEffect(() => {
    //useEffect adalah fungsi yang dikasih react, useEffect isinya fungsi, cara penulisannya useEffect(() => {   })
    // di javascript / typescript, await & promise
    // return type dari fetch adalah promise
    fetch('http://localhost:3000/api/hello') //fetch adalah fungsi,fungsinya untuk manggil API di internet, fungsinya adalah rahasia kecuali buka source code langsung
      .then((response) => response.json()) //fungsi yang kita panggil dari promisenya fetch
      // bentuk JSON = {"name":"John Doe", "schools": ["blablalba"]}
      .then((json) => {
        setName(json.name);
        setSchools(json.schools);
      });
    // .then((json) => console.log('INI HASIL API json.name = ', json.schools)); //console.log adalah fungsi buat nge-print di web browser, json nama parameter, name nya ngambil data dari keyname
  }, []);

  //content utama hello/world - content utama ditulis
  return (
    <>
      <p>HELLO {name}</p>
      <p>SCHOOLS {schools}</p>
      <ul>
        <li>
          <p>Hello Page #1</p>
        </li>
        <li>
          <ContentHello>#2</ContentHello>
        </li>
        <li>
          <ContentHello>#3</ContentHello>
        </li>
      </ul>
    </>
  );
}

//export default : keyword di typescript
//bentuk syntax html tapi html yang diextend disama react untuk bisa render react component
