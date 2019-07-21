import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({course}) => {
    console.log('props are', course)

    return (
        <div>
            <Header course={course}/>
            <Content parts={course.parts}/>
        </div>
    )
}






export default Course