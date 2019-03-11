import React, { Component } from 'react';
import User from "./User";


const Users = ({users, onClick}) =>{
    return (
        users.map((user)=>
           (
               <User key={user.id}
                  id={user.id}
                  name={user.name}
                  photo={user.photo}
                  level={user.level}
                  checked={user.checked}
                  onCheck={onClick}
                />
           )
        )
    )
};


export default Users;
