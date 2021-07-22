import axios from 'axios';

export const ownApi = axios.create({
  baseURL: 'http://localhost:8080',
  header: {'Content-Type': 'application/json'}
})

export async function validateUser(user, email, password){
  console.log(user.email)
  if(user.email === email && user.password === password){
    window.location.href = `http://localhost:3000/${user.id}/lista-contatos`
  }
  else {
    alert('Acesso negado: usuário ou senha incompativeis')
  }
}

export async function getUserContacts(id, contacts){
  
  let filtered = []
  for(let i = 0; i < contacts.length; i++){
      if(id === contacts[i].user.id){
        filtered.push(contacts[i])
      }
  }
  return(filtered)
}

export const addNew = (fulName, phone, email, note, userId) => {
  ownApi.post(`/agenda/contact/user/${userId}`, 
  {fulName, phone, email, note})

  alert("Contato adicionado com sucesso")
}