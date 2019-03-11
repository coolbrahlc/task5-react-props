import React, { Component } from 'react';

const SelectedUser = ({name, id, onDelete}) =>{
    return (
        <div className="selectedUsersContainer">
            <span>
                {name}
            </span>
            <div className="removeButton" onClick={() =>onDelete(id)}>
                X
            </div>
        </div>
    )
};

export default SelectedUser;