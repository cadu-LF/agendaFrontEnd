import React, {createContext, useContext, useState} from 'react'

const ErrorContext = React.createContext({})

export const ErrorProvider = ({children}) => {
  const [error, setError] = useState(true)

  return (
    <ErrorContext.Provider
      value={{ error, setError }}
    >
      {children}
    </ErrorContext.Provider>
  )

}

export function useError() {
  const context = useContext(ErrorContext)

  return context
}