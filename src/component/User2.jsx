import React from 'react';

const User2 = ({children}) => {

    const modificateStringName = (names)=>{
        const patterntStringUser = 'It’s user!'
        if(names.indexOf('e') !== -1){
            return `It’s Premium User! Welcome, ${names}!`
        }
        if(names.length > 5){
            return `${patterntStringUser} ${names.slice(0, 5)}...`
        }
        return `${patterntStringUser} ${names}!`
    }

    const palidrom = (names) =>{
        if(names.toLowerCase().split('').reverse().join('') === names.toLowerCase()){
           return true; 
        }
    }

    return (
        <div>
            {
              <span className={palidrom(children) ? 'name--highlighted': ''}> 
                {modificateStringName(children)}
              </span>
            }
        </div>
    );
}

export default User2;
