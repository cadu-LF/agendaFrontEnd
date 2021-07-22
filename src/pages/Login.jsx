import React from 'react';

import {
  Title,
  Container,
  ContainerFlexX
} from '../ui'

import {LoginForm} from '../components/LoginForm'

export const Login = () =>{
  return(
    <Container>
        <Title>Login</Title>
        <ContainerFlexX>
          <LoginForm/>
        </ContainerFlexX>
    </Container>
  )
}