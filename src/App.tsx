import React, { useState } from 'react';
import { Note } from './Models/NoteModel';
import './App.css'
import Header from './Components/Header';
import { Container, Row, Col } from 'react-bootstrap'
import NoteList from './Components/NoteList';


function App() {
  const [notes, setnotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae harum esse adipisci facere ipsam eveniet pariatur ut, odit aperiam tempore!",
    color: "blue",
    date: (new Date).toString()

  }])

  return (
    <>
      <Header/>
      <Container className='mt-5'>
        <Row>
          <Col>
            <NoteList notes = { notes }/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
