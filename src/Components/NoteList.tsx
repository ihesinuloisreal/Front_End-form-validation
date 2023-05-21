import React, { ReactNode, useEffect, useState } from 'react'
import Notes from './Notes'
// import { Note} from '../Models/NoteModel'
import axios from 'axios'
import H1 from './H1';


interface NoteProps { 
    _id: string; 
    title?: string; 
    text?: string; 
    color?: string; 
    date?: string;
}

const NoteList = (): JSX.Element => {
    const [data, setdata] = useState<NoteProps[] | null >(null );
    useEffect(() => {
        const fetch = async () => {
        try {
            const response = await axios.get<NoteProps[]>('http://localhost:8080/note');
            setdata(response.data);
            // console.log(data)
        } catch (error) {
            console.error(error)
        }
        };
        fetch();
    },[]);
    const handleDelete = async (id: string) =>{
        setdata(data.filter(data => data._id !== id));

        try {
            const response = await axios.delete(`http://localhost:8080/delete/${id}`);
            console.log(id)
        } catch (error) {
            console.error(error)
        }
        // setnotes(notes.filter(note => note.id !== id))
    }
    const handleEdit = async (id: string) => {
        
    }
  return (
    <>
        { data ? ( <div>{ data.map((data) => (
            <Notes key={data._id} note={data} handleDelete = {handleDelete} handleEdit = {handleEdit}/>
        ))}</div> ) : <H1 text="No record found in the database"/> }
    </>
  )
}

export default NoteList