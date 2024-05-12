import { useEffect, useState } from 'react'; //buat ngasih tau nodejs kalau ngambil fungsi useEffet & useState di react

type ContentAboutProperties = {
  children: string;
};

function ContentAbout(properties: ContentAboutProperties) {
  return <p>Hello Page {properties.children}</p>;
}

export default function AboutIndex() {
  const [username, setUsername] = useState('');
  const [hometown, setHometown] = useState([]);

  useEffect(() => {
    //useEffect adalah fungsi yang dikasih react, useEffect isinya fungsi, cara penulisannya useEffect(() => {   })
    // di javascript / typescript, await & promise
    // return type dari fetch adalah promise
    fetch('http://localhost:3000/api/about/me') //fetch adalah fungsi,fungsinya untuk manggil API di internet, fungsinya adalah rahasia kecuali buka source code langsung
      .then((response) => response.json()) //fungsi yang kita panggil dari promisenya fetch
      // bentuk JSON = {"name":"John Doe", "schools": ["blablalba"]}
      .then((json) => {
        setUsername(json.username);
        setHometown(json.hometown);
      });
  }, []);

  //content utama hello/world - content utama ditulis
  return (
    <table>
      <tr>
        <td>Col2</td>
      </tr>
    </table>
  );
}

//export default : keyword di typescript
//bentuk syntax html tapi html yang diextend disama react untuk bisa render react component
