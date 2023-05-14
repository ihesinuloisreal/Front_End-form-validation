import React, { FormEvent, useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Form, Alert } from 'react-bootstrap'
import { Note } from '../Models/NoteModel'
import axios from 'axios'

interface FormValues {
    // notes: Note[],
    // setnotes: React.Dispatch<React.SetStateAction<Note[]>>,
    title: string;
    text: string;
    color: string;
}

export const CreateNote = () => {
    // const [error, setError] = useState<string>("");
    // const titleRef = useRef<HTMLInputElement | null>(null);
    // const textRef = useRef<HTMLTextAreaElement | null>(null);
    // const ColorRef = useRef<HTMLInputElement | null>(null);
    const [data, setdata] = useState<string>("");
    const [formValues, setFormValues] = useState<FormValues>({
        title: "",
        text: "",
        color: ""

    });
    const [error, setError] = useState<Partial<FormValues>>({});

    // Handle form input
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {title, text} = e.target;
        setFormValues((prevValues) => ({...prevValues, [title]: value }));
    };
    // Handle form submission
    const handleSubmit = async (e:FormEvent) =>{
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('http://localhost:8080/send',formValues);
                console.log("Note Entered:", response.data);
                // Clear form input
                // setFormValues({""});
            } catch (error) {
                console.error("Failed to create: ", error);
            }
        } else {
            console.log("Form is invalide:", error);
            return error

        }
        
    };

    const validateForm = (): boolean => {
        const newError: Partial<FormValues> = {};

        if(!formValues.title) {
            newError.title = 'Title Required'
        } else if (!formValues.text) {
            newError.text = 'Text Required'
        } 
        setError(newError);
        return Object.keys(newError).length === 0;
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
            <Form.Group className='mb-3' controlId='formBasicTitle'>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' placeholder='Enter title for the note' name='title' value={formValues.title} onChange={handleInputChange}/>
            {error.text && <Alert variant='danger'>{error.text}</Alert>}
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicText'>
                <Form.Label>Text</Form.Label>
                <Form.Control placeholder='Enter Your note' as="textarea" rows={3} name='text' value={formValues.text} onChange={handleInputChange}/>
                {error.text && <Alert variant='danger'>{error.text}</Alert>}
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label htmlFor='colorInput'>Notes color</Form.Label>
                <Form.Control type='color' id='colorInput' defaultValue="#dfdfdf" title='Choose your color' name='color' onChange={handleInputChange} />
            </Form.Group>
            <Button type="submit" variant='primary'> Submit</Button>
        </Form>
    </div>
  )
}