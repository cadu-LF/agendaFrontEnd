import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

import { ownApi } from '../services';

import {
  Container,
  ContainerFlexX,
  ContainerFlexY,
  Title  
} from '../ui'

export const Contact = () => {
  const [contact, setContact] = useState({})
  let {contactId} = useParams()

  useEffect(() => {
    setContact(ownApi.get(`agenda/contact/${contactId}`)
    .then(response => setContact(response.data)))
  }, [])

  return(
    <Container>
      <ContainerFlexX>
        <ContainerFlexY>
          <Title>Nome: {contact.fulName}</Title>
          <Title>Telefone: {contact.phone}</Title>
          <Title>Email: {contact.email}</Title>
          <Title>Notas: {contact.note}</Title>
        </ContainerFlexY>
      </ContainerFlexX>
    </Container>
  )
}