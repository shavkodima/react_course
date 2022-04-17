import React from 'react';
import { userListArray } from '../dataUsers';
import User2 from './User2';

const Composableuser = () => {
    return (
        <>
        {
            userListArray.map((elem)=>{
                return <User2 key={elem.id}>{elem.name}</User2>
            })
        }
        </>
    );
}

export default Composableuser;
