import { useEffect, useState } from 'react';
import './App.css';

import FriendList from './component/friendlist/FriendList';
import Header from './component/header/Header';
import Users from './component/users/Users';
import users from './data/data.json'

function App() {
 let [user,setUser] = useState([])
 const handleUser= (newUser)=>{
   setUser([...user,newUser])
 }
 console.log(user)
  return (
    <div className="">
    <Header></Header>
 <div className="container">
 <div className= 'user'>
      {
      users.map(user=><Users users ={user} handleUser={handleUser}></Users>)
    } 
   
    </div>
     <FriendList user = {user}></FriendList>

 </div>
    </div>
  );
}

export default App;
