import React from 'react'



const Person = ({person}) => {

    console.log('names is ', person.name )
    return (
        <li>
            {person.name}
        </li>

    )
}



export default Person