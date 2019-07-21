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

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const personsObject = {
      name: newName
    }

    setPersons(persons.concat(personsObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName}
                       onChange={handleNameChange}/>
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