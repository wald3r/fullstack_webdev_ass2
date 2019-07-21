import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')



  const rows = () => persons.map(person =>

        <Person 
          key={person.name}
          person={person}
        />

    )

    const addToPhonebook = (event) => {
      event.preventDefault()
      console.log('button clicked', event.target)

      const personObject = {
        name: newName
      }

      setPersons(persons.concat(personObject))
      setNewName('')
    }


    const handlePersonChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addToPhonebook}>
        <div>
          name: <input value={newName}
                       onChange={handlePersonChange}/>
        </div>
        <div>
            <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {rows()}
      </ul>
    </div>
  )
}

export default App