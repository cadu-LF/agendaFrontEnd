import React, { createContext, useCallback, useContext, useState } from 'react'
import { ownApi } from '../services'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  // state q pega TODAS as ocorrências do banco
  const [users, setUsers] = useState([])

  const loadUsers = useCallback(async () => {
    // FUNÇÃO QUE, QUANDO EXECUTADA, BUSCA AS OCORRÊNCIAS CADASTRADA NO BACK-END
    // E ATUALIZA O ESTADO QUE ARMAZENA AS OCORRÊNCIAS ATUAIS
    await ownApi.get('/agenda/user')
    .then(response => setUsers(response.data))

  }, [])

  return (
    <UserContext.Provider
      value={{ users, loadUsers }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)

  return context
}