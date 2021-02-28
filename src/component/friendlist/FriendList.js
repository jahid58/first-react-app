import React from 'react';
import './friendlist.css'
const FriendList = (props) => {
    let count = props.user.length;
    let total = props.user.reduce(((total,user)=>total+user.income),0)
    return (
        <div className='friends'>
            <div className="each">
                <h4>Friends</h4>
                <h4>{props.user.map(user=><li>  {user.first_name}</li>)}</h4>
            </div>
            <h3>Friend count :{count}</h3>
            <h4>Total friends income : {total}</h4>
        </div>
    );
};

export default FriendList;