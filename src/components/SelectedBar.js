import React, { Component } from 'react';
import SelectedUser  from "./SelectedUser.js";

const SelectedBar = ({selectedUsers, onDelete}) =>{
    return (
        selectedUsers.map((user)=>
            (
                <SelectedUser key={user.id}
                      name={user.name}
                      id={user.id}
                      onDelete={onDelete}
                />
            )
        )
    )
};


export default SelectedBar;
