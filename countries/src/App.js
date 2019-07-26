import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Countries from './components/Countries';


const App = () => {

    const [countries, setCountries] = useState([])
    const [newFilter, setNewFilter] = useState('')
    const [showNothing, setShowNothing] = useState(true)

    var filterAll = () => {
        var filtered = countries.filter(country => country.name.includes(newFilter))
        console.log(filtered)
        if (newFilter === ''){
            return []
        }else{
            return filtered
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
            <Countries 
                countries={showNothing ? [] : filterAll()}
            />
        </div>
    )
}

export default App