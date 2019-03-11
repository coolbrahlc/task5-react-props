import React from 'react';

const User = ({name, level, id, checked, photo, onCheck}) => {

    let className = 'checkbox';

    if (checked) {
        //className.concat("-checked");
        className = 'checkbox-checked';
        console.log(className)
        console.log(name)

    }

    return (
             <div className="userRowContainer">

                 <img className="userAavatar" src={photo} srcSet={photo} alt=""/>
                 <div className="userNameCol">
                     <div>{name}</div>
                     <div>Level {level}</div>
                 </div>

                 <div className={className} onClick={() => onCheck(id)}>{checked}</div>
             </div>
    );
};


export default User;
