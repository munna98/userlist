import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

function Users() {
  const [userList, setUserList] = useState([]); 
  

  const fetchUser = async (userId) => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    return response.data;
  };

  useEffect(() => {
    (async () => {
      const response = await fetchUser();

      setUserList(response);
    })();
  }, []);
  console.log(userList);

  const deleteUser = (id) =>{
    setUserList((userList) => (userList.filter(item => item.id !== id)))
    console.log(id)};

  
 if(userList.length!==0){
  return (
    
    <div>
      {userList.map((data, id) => (
        <li key={data.id}>
         {data.id} {data.username}  
          <button onClick={() => deleteUser(data.id)}>Delete</button>
        </li>
      ))}
    </div>
  );}
  return (
    <h3>No more Users</h3>
  )
}

export default Users;
