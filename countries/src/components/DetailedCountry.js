import React from 'react'
import Languages from './Languages'
import Weather from './Weather'

const DetailedCountry = ({country}) => {
    const printLanguages = () => country.languages.map(language =>
        
        <Languages 
            key={language.iso639_1}        
            language={language}        
        />

    )
    return (
        <div>
            <h2>{country.name}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2>Languages</h2>
            <ul>
                {printLanguages()}
            </ul>
            <img src={country.flag} alt={country.name} width="150" height="120"/>
            <Weather 
                country={country}/>
        </div>
    )
}



export default DetailedCountry