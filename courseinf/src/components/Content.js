import React from 'react'
import Part from './Part'

const Content = ({parts}) => {
    console.log('props are', parts)

    

    const rows = () => parts.map(part =>
        <Part 
            key={part.id}
            part={part}
        />
    )

    const sum = (acc, value) => {
      return acc + value.exercises
    }

    return(
        <div>
        <ul>
            {rows()}
        </ul>       
            <p><b>total of {parts.reduce(sum, 0)} exercises</b></p>
        </div>

    )
}




export default Content