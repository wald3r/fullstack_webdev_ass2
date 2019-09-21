import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'
import Notification from './components/Notification'

const App = () => {

  const [notes, setNotes] = useState([])  
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('some error happened...')

  useEffect(() => {
    console.log('effect')
    noteService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response)
      })
  }, [])
  console.log('render', notes.length, 'notes')

  const Footer = () => {
    const footerStyle = {
      color: 'green',
      fontStyle: 'italic',
      fontSize: 16
    }
  
    return (
      <div style={footerStyle}>
        <br />
        <em>Note app, Department of Computer Science, University of Helsinki 2019</em>
      </div> 
    )
  }
  

  const handleNotChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }


  const toggleImportanceOf = id => {
    console.log(`importance of  ${id} needs to be toggled`)
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    noteService
      .update(id, changedNote)
      .then(response => {
        setNotes(notes.map(note => note.id !== id ? note : response))
    })
      .catch(error => {
        setErrorMessage(`the note ${note.content} was already deleted from server!`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  const rows = () => notesToShow.map(note => 
      <Note 
        key={note.id}
        note={note}    
        toggleImportance={() => toggleImportanceOf(note.id)}
      />)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() > 0.5,
    }

    noteService
      .create(noteObject)
      .then(response => {
        setNotes(response)
        setNewNote('')

      })
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {rows()}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote}
               onChange={handleNotChange}/>
        <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  )
}


export default App