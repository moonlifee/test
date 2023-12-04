
import Card from './assets/table';
import { useState } from 'react';







function App() {
      const [users, setUsers] = useState([
        {
          name: "gaybullo",
          age: 21,
          passowrd: "1212",
        },
        {
          name: "saydullo",
          age: 20,
          passowrd: "2334",
        },
        {
          name: "asadullo",
          age: 23,
          passowrd: "1334",
        },
      ]);
  

  

  return (
    <div className="App">
      <table border={2} cellSpacing={0} cellPadding={20} >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {
           users.map((val,ind)=>
           (
          
           ) 
          )
          }
        </tbody>
      </table>
     
    </div>
  );
}

export default App;
