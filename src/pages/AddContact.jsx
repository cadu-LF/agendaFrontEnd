import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom'

import {addNew} from '../services'

import {
  Field,
  Container,
  Label,
  ContainerFlexY,
  Button,
  ContainerFlexX
} from '../ui'

export const AddContact = () => {

  let {id} = useParams()

  useEffect(() => {

  }, [])

  return(
    <Container>
      <ContainerFlexX>
        <form
        onSubmit={
            event => {
              event.preventDefault()
              let fulName = document.getElementById('fulName').value
              let phone = document.getElementById('phone').value
              let email = document.getElementById('email').value
              let note= document.getElementById('note').value


              addNew(fulName, phone, email, note, id)}
        }
        >
          <ContainerFlexY>
            <Label>Nome Completo</Label>
            <Field id='fulName' required type='text'/>
            <Label>Telefone</Label>
            <Field id='phone' required type='text'/>
            <Label>Email</Label>
            <Field id='email' type='email'/>
            <Label>Nota</Label>
            <Field id='note' type='text'/>              
            <Button type="submit">Adicionar</Button>
          </ContainerFlexY>
        </form>
      </ContainerFlexX>
    </Container>
  )
}