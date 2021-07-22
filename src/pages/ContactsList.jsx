import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'

import {useContact} from '../hooks/useContact'
import {Link} from 'react-router-dom'

import {
  Container,
  ContainerFlexX,
  ContainerFlexY,
  Title,
  StyledLink
} from '../ui'

export const ContactsList = () => {
  let { id } = useParams()
  const {contacts, loadContacts} = useContact([])

  useEffect(() => {
    loadContacts(id);    
  }, [])

  return(
    <Container>
      <ContainerFlexY>
        <StyledLink to={`/${id}/adionar-novo`}>
          Adicionar Novo Contato
        </StyledLink>
        {
          contacts.map(contact => {
            return(
              <Link to={`/contato/${contact.id}`}>
                <ContainerFlexX key={contact.id}>
                  <Title>{contact.fulName}</Title>
                </ContainerFlexX>              
              </Link>
            )
          })
        }        
      </ContainerFlexY>
    </Container>
  )
}