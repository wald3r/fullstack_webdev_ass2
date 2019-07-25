import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Country from './components/Country'
import DetailedCountry from './components/DetailedCountry';

const App = () => {

    const [countries, setCountries] = useState([])
    const [newFilter, setNewFilter] = useState('')
    const [showNothing, setShowNothing] = useState(true)

    var filterAll = () => {
        var filtered = countries.filter(country => country.name.includes(newFilter))
        console.log(filtered)
        if (filtered.length > 10){
            return []
        }else{
            return filtered
        }


    }  

    const print = () => {
        const countriesToShow = showNothing ? [] : filterAll()
        console.log('length', countriesToShow)
        if(countriesToShow.length > 1){
             countriesToShow.map(country => {
                <Country 
                     key={country.name}
                     country={country}
                />
            })
        }else if (countriesToShow.length === 1) {
            <DetailedCountry 
                key={countriesToShow[0].name}
                country={countriesToShow[0]}
            />
        }
    }
    

    useEffect(() => {
        console.log('Effect')
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(response => {
                console.log('promise fulfilled')
                setCountries(response.data)
            })
    }, [])
    console.log('render', countries.length, 'length')



    const changeFilterHandler = () => {
        console.log(event.target.value)
        setNewFilter(event.target.value)
        if(event.target.value === ''){
            setShowNothing(true)
        }
        else{
            setShowNothing(false)
        }
    }

    return (
        <div>
            <form>
                find countries <input input={newFilter}
                                      onChange={changeFilterHandler}/> 
            </form>
            <ul>
                {print()}
            </ul>
        </div>
    )
}

export default App