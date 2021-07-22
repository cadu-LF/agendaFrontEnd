import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'

import {validateUser, ownApi} from '../services'
import {useUser} from '../hooks/useUser'

import {      
  Label,
  Field,
  Button
} from '../ui'

export const LoginForm = () => {
  function sendValidation(){
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    
    ownApi.get(`/agenda/user/email/${email}`)
    .then((response) => validateUser(response.data, email, password))
    
  }

  return(
    <form onSubmit={
      event => {
        event.preventDefault()
        
        sendValidation()
      }
    }>
      <Label>Email</Label><br></br>
      <Field type="email" required id='email'/><br></br>
      <Label>Senha</Label><br></br>
      <Field type="password" id='password'/><br></br>
      <Button type="submit">Entrar</Button><br></br>          
      <div className='separator'></div>
        <Link to="/cadastrar">
          <Button>Cadastrar-se</Button>
        </Link>  
    </form>
  )
}