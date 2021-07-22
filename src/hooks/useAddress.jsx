import React, { createContext, useCallback, useContext, useState } from 'react'
import { ownApi } from '../services'

const AddressContext = createContext({})

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([])

  const loadAddresses = useCallback(async () => {    
    const resp = await ownApi.get('/address')

    setAddresses(resp)
  }, [])

  return (
    <AddressContext.Provider
      value={{ addresses, loadAddresses }}
    >
      {children}
    </AddressContext.Provider>
  )
}

export function useAddress() {
  const context = useContext(AddressContext)

  return context
}