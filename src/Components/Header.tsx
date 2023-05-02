import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

type Props = {}

export default function Header({}: Props) {
  return (
    <Navbar fixed="top" bg="dark" variant = "dark">
        <Container>
            <Navbar.Brand>
                React Typescript Bootstrap
            </Navbar.Brand>
        </Container>
    </Navbar>
  )
}