import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Form from './components/Form'
import Filter from './components/Filter'
import axios from 'axios'

const findPerson = (persons, name) => {
  
  for(let i = 0; i < persons.length; i++){
    if (persons[i].name === name){
      return true
    }
  }
  return false
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter] = useState('')
  const [ showAll, setShowAll] = useState(true)


  useEffect (() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  } , [])
  console.log('render', persons.length, 'persons')


  const contactsToShow = showAll ? persons : persons.filter(function(person) {
    return person.name.includes(newFilter) 
  })

  const rows = () => contactsToShow.map(person =>
        <Person 
          key={person.name}
          person={person}
        />
    )

  const addContact = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const personsObject = {
      name: newName,
      number: newNumber
    }

    if(!findPerson(persons, personsObject.name)){
      setPersons(persons.concat(personsObject))
    }
    else{
      window.alert(`${newName} is already added to phonebook`)
    }
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = () => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = () => {
    if(event.target.value === ''){
      setNewFilter('')
      setShowAll(true)
    }
    else{
      console.log(event.target.value)
      setNewFilter(event.target.value)
      setShowAll(false)
    }

  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter newFilter={newFilter}
              handleFilter={handleFilter}/>
      <h2>add new contact</h2>
      <Form addContact={addContact} 
            newName={newName} 
            handleNameChange={handleNameChange} 
            newNumber={newNumber}
            handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <ul>
        {rows()}
      </ul>
    </div>
  )
}

export default App
