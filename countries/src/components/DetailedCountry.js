import React from 'react'

const DetailedCountry = ({country}) => {



    return (
        <div>
            <h2>{country.name}</h2>
            capital {country.capital}
            population {country.population}
        </div>
    )
}



export default DetailedCountry