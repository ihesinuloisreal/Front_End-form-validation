import React from 'react'
import Notes from './Notes'
import { Note } from '../Models/NoteModel'

type NotesProps = {
    notes: Note[]
}

const NoteList = ({notes}: NotesProps) => {
    const renderNote = ():JSX.Element[] => {
        return notes.map(note => {
            return <Notes key={note.id} note={note}/>
        })
    }
  return (
    <>
        <h2 className='mt-3'>Notes</h2>
        <div>{ renderNote()}</div>
    </>
  )
}

export default NoteList