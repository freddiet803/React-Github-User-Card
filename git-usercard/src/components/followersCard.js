import React from 'react';
import UserCard from './usercard.js';

const FollowerCards = props => {

    return (
        <div>
            {props.followerInfo.map(user =>{
                return <UserCard userInfo={user}/>
            })}
        </div>
    )

}

export default FollowerCards;