import axios from "axios";
import React, {useEffect, useState} from "react";

const App = () => {

  const [users,setUsers] = useState([]) 

  useEffect( () => {
    axios("https://jsonplaceholder.typicode.com/users")
    .then( (res) =>{
      setUsers(res.data)
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
  },[])

  return(
    <>
    <h2> Users Data </h2>
    <ul>
    {users.map((user,i) => {
      // console.log(user.name)
      return <li key={i}> { user.name }</li>
    })}

    </ul>
    </>
  )
}

export default App;