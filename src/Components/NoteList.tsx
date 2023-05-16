import React, { ReactNode, useEffect, useState } from 'react'
import Notes from './Notes'
import { Note } from '../Models/NoteModel'
import axios from 'axios'


interface NotesProps { id: any; title?: string; text?: string; color?: string; date?: string; data: string}

const NoteList = (): JSX.Element => {
    const [data, setdata] = useState<NotesProps[] | null >(null );
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get<NotesProps[]>('http://localhost:8080/note');
        setdata(response.data);
        // console.log(data)
      } catch (error) {
        console.error(error)
      }
    };
    fetch();
  },[]);
    const handleDelete = (id:string) =>{
        // setnotes(notes.filter(note => note.id !== id))
    }
    // const renderNote = ():JSX.Element[] => {
        
    // }
  return (
    <>
        <h2 className='mt-3'>Notes</h2>
        <div>{data ? data.map((data: NotesProps) => {
            return <Notes key={data.id} note={data} handleDelete = {handleDelete}/>
        }): ""}</div>
    </>
  )
}

export default NoteList