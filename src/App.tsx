import React, { useState } from 'react';
// import { Note } from './Models/NoteModel';
import './App.css'
import Header from './Components/Header';
import { Container, Row, Col } from 'react-bootstrap'
import NoteList from './Components/NoteList';
import { CreateNote } from './Components/CreateNote';
import { Button } from 'react-bootstrap';



function App() {
  const [visibility, setVisibility] = useState<boolean>(true);

  const visible = (): boolean => {
    setVisibility(!visibility)
  }

  return (
    <>
      <Header/>
      
      <Container className='mt-5'>
      <div className='mt-3 mb-3'><h2 className='mt-3'>{visibility ? "Notes" : "Add Note"}</h2> <Button type="submit" variant='secondary' onClick={visible}> {visibility ? "Add Note" : "View List"}</Button> </div>
          {visibility ? <Row>
          <Col>
            <NoteList/>
          </Col>
        </Row> : <Row>
          <Col>
            <CreateNote />
          </Col>
        </Row>}
        
        
      </Container>
    </>
  )
}

export default App
