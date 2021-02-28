import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './users.css';

const Users = (props) => {
    const user = props.users;
    
    return (
        <div className="user-profile">
      <img src={user.image} alt=""/>
      <h3>{user.first_name + ' '+ user.last_name}</h3>
      <h5> Address :{user.ip_address}</h5>  
      <h4>income :{user.income}</h4>
      <h5>Email :{ user.email}</h5>
      <button className="btn" onClick ={()=>props.handleUser(user)}> <FontAwesomeIcon icon={faPlus} /> Add Friend</button>


        </div>
    );
};

export default Users;