import React from 'react'


const Header = ({course}) => {
    console.log('props are', course.name)

    return (
        <div>
            <h1>{course.name}</h1>
        </div>
    )
}



export default Header