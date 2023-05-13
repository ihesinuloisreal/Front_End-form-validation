import React, { FormEvent, useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Form, Alert } from 'react-bootstrap'
import { Note } from '../Models/NoteModel'
import axios from 'axios'

interface Props {
    // notes: Note[],
    // setnotes: React.Dispatch<React.SetStateAction<Note[]>>,
    title: String;
    text: String;
    color: String;
}

export const CreateNote = () => {
    const [error, setError] = useState<string>("");
    // const titleRef = useRef<HTMLInputElement | null>(null);
    // const textRef = useRef<HTMLTextAreaElement | null>(null);
    // const ColorRef = useRef<HTMLInputElement | null>(null);
    const [data, setdata] = useState<string>("");
    const [title, setTitle] = useState('');
    const [text, setText] = useState("");
    const [color, setColor] = useState("");
    // const [post, setpost] = useState({
    //     title: "",
    //     text: "",
    //     color: "",
    //     date: "",

    // });

    const handleSubmit = async (e:FormEvent) =>{
        e.preventDefault();
        try {
            const newNote: Props = {
                title,
                text,
                color,
            };
            const response = await axios.post('http://localhost:8080/send',newNote);
            console.log("Note Entered:", response.data);
            // Clear form input
            setTitle("");
            setText("");
        } catch (error) {
            console.error("Failed to create: ", error);
        }
    };
    // useEffect(() => {
    //     axios.get('http://localhost:8080')
    //     .then((response) => {
    //         setdata(response.data);
    //         console.log(response)

    //     });
    // },[]);
    // const handleInput = (e: { target: { value: any } }) => {

    // };

  return (
    <div>
        <div>{data}</div>
        <h2>Create Note</h2>
        <Form className='mt-3 mb-3' onSubmit={handleSubmit}>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form.Group className='mb-3' controlId='formBasicTitle'>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' placeholder='Enter title for the note' onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicText'>
                <Form.Label>Text</Form.Label>
                <Form.Control placeholder='Enter Your note' as="textarea" rows={3} onChange={(e) => setText(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label htmlFor='colorInput'>Notes color</Form.Label>
                <Form.Control type='color' id='colorInput' defaultValue="#dfdfdf" title='Choose your color' onChange={(e) => setColor(e.target.value)} />
            </Form.Group>
            <Button type="submit" variant='primary'> Submit</Button>
        </Form>
    </div>
  )
}