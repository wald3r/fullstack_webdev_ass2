import React from 'react'


const Part = ({part}) => {
    console.log('props are', part)

    return (
        <li>{part.name} {part.exercises}</li>
    )
}



export default Part