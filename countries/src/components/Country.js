import React, {useState} from 'react'
import DetailedCountry from './DetailedCountry'

const Country = ({country}) => {

    const [newView, setNewView] = useState(false)

    console.log(country)
    if(newView === false){
        return (
            <li>
                {country.name} <button onClick={() => setNewView(!newView)}>{newView ? 'hide' : 'show'}</button>
            </li>
        )
    }else{
        return (
            <li>
                {country.name} <button onClick={() => setNewView(!newView)}>{newView ? 'hide' : 'show'}</button>
                <DetailedCountry 
                    country={country}
                />
            </li>
        )
    }
}




export default Country