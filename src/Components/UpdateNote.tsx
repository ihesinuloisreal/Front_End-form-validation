import React, { FormEvent, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Form, Alert } from 'react-bootstrap'
import axios from 'axios'

interface FormValues {
    // notes: Note[],
    // setnotes: React.Dispatch<React.SetStateAction<Note[]>>,
    title: string;
    text: string;
    color: string;
}

export const CreateNote = () => {
    const [formValues, setFormValues] = useState<FormValues>({
        title: "",
        text: "",
        color: "#dfdfdf"
    });
    const [error, setError] = useState<Partial<FormValues>>({});

    // const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setColor(e.target.value);
    // }

    // Handle form input
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormValues((prevValues) => ({...prevValues, [name]: value }));
    };
    // Handle form submission
    const handleSubmit = async (e:FormEvent) =>{
        e.preventDefault();
        // console.log(formValues)
        if (validateForm()) {
            try {
                
                const response = await axios.post('http://localhost:8080/send',formValues);
                console.log("Note Entered:", response.data);
                // Clear form input
                setFormValues({
                    title: "",
                    text: "",
                    color: "#dfdfdf"
                });
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
        } else if (!formValues.color){
            newError.text = 'color Required'
        }
        setError(newError);
        return Object.keys(newError).length === 0;
    };
    
  return (
    <div>
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
                <Form.Control type='color' id='colorInput' value={formValues.color} title='Choose your color' name='color' onChange={handleInputChange} />
            </Form.Group>
            <Button type="submit" variant='primary'> Submit</Button>
        </Form>
    </div>
  )
}