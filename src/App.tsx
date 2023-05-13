import React, { useState } from 'react';
import { Note } from './Models/NoteModel';
import './App.css'
import Header from './Components/Header';
import { Container, Row, Col } from 'react-bootstrap'
import NoteList from './Components/NoteList';
import { CreateNote } from './Components/CreateNote';


function App() {
  const [notes, setnotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Lorem ipsum ",
    text: "Repudiandae harum esse adipisci facere ipsam eveniet pariatur ut, odit aperiam tempore!",
    color: "#dfdfdf",
    date: (new Date).toString()

  }])

  return (
    <>
      <Header/>
      <Container className='mt-5'>
        <Row>
          <Col>
            <NoteList notes = { notes } setnotes = { setnotes }/>
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNote />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
