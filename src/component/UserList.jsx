import React from 'react';
import User from './User';
import { userListArray } from '../dataUsers';

const Userlist = () => {

    return (
        <>
        {
            userListArray.map((elem)=>{
                return <User key={elem.id} name={elem.name}/>
            })
        }
        </>
    );
}

export default Userlist;
