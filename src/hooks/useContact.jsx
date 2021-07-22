import React, { createContext, useCallback, useContext, useState } from 'react'
import { ownApi } from '../services'

const ContactContext = createContext({})

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([])

  const loadContacts = useCallback(async (userId) => {
    await ownApi.get(`/agenda/contact/user/${userId}`)
    .then(response => setContacts(response.data))

  }, [])

  return (
    <ContactContext.Provider
      value={{ contacts, loadContacts }}
    >
      {children}
    </ContactContext.Provider>
  )
}

export function useContact() {
  const context = useContext(ContactContext)

  return context
}