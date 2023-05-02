import React from 'react'
import { Note } from '../Models/NoteModel'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

type Props = {
    note: Note
}

const Notes = ({note}: Props) => {
  return (
    <div className='mb-3'>
        <Card>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>{note.text}</Card.Text>
            <Card.Subtitle className='text-muted'>{note.date}</Card.Subtitle >
            <Button className='mb-3' variant='danger'>Delete</Button>
        </Card>
    </div>
  )
}

export default Notes
