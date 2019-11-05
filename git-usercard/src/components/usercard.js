import React from 'react';
import '../App.css';


const Usercard = props => {

    return (
        <div className="userCard">
           <img src={props.userInfo.avatar_url}/> 
           <h2>{props.userInfo.name}</h2>
           <h4>{props.userInfo.login}</h4>
        </div>
    )

}

export default Usercard;