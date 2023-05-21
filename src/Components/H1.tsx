import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

type Props = {
    text: string;
}

export default function H1({text}: Props) {
  return (
    <p>
        {text}
    </p>
  )
}