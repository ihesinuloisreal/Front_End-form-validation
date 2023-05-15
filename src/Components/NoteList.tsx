import React, { useEffect, useState } from 'react'
import Notes from './Notes'
import { Note } from '../Models/NoteModel'
import axios from 'axios'


type NotesProps = {
    notes: Note[],
    setnotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NoteList = ({notes, setnotes}: NotesProps) => {
    const [data, setdata] = useState<string>("");
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('http://localhost:8080/note');
        setdata(response.data);
        // console.log(data)
      } catch (error) {
        console.error(error)
      }
    };
    fetch();
  },[]);
    const handleDelete = (id:string) =>{
        setnotes(notes.filter(note => note.id !== id))
    }
    const renderNote = ():JSX.Element[] => {
        return notes.map(note => {
            return <Notes key={note.id} note={note} handleDelete = {handleDelete}/>
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