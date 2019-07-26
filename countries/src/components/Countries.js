import React from 'react'
import Country from './Country'
import DetailedCountry from './DetailedCountry';


const Countries = ({countries}) => {



    const printCountry = () => countries.map(country =>
        <Country 
            key={country.name}
            country={country}
        />
    )

    if(countries.length > 1 && countries.length < 10){
       return (
           <ul>{printCountry()}</ul>
       ) 
       
    }else if (countries.length === 1) {
       return(
            <DetailedCountry 
                country={countries[0]}
            />
       )
    }else if (countries.length > 10) {
        return(
            <div>more details needed!</div>
        )
   }else{
       return(
           <div></div>
       )
   }

}



export default Countries