import React from 'react'

import { AddressProvider} from './useAddress'
import { CategoryProvider} from './useCategory'
import { UserProvider} from './useUser'
import { ContactProvider} from './useContact'
import { ErrorProvider} from './useError'

export const AppProvider = ({children}) => {
  return (
  <AddressProvider>
      <CategoryProvider>
        <UserProvider>
          <ContactProvider>
              <ErrorProvider>
              {children}
              </ErrorProvider>
          </ContactProvider>
        </UserProvider>
      </CategoryProvider>
    </AddressProvider>
  )
}

export default AppProvider

/*
validar usuario retornar um boolean

setar os erros com o retorno

dentro de cada página eu preciso ver se erros=true

se for n pode acessar

senao pode
*/