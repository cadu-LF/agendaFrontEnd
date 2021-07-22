import React, { createContext, useCallback, useContext, useState } from 'react'
import { ownApi } from '../services'

const CategoryContext = createContext({})

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([])

  const loadCategories = useCallback(async () => {    
    const resp = await ownApi.get('/category')

    setCategories(resp)
  }, [])

  return (
    <CategoryContext.Provider
      value={{ categories, loadCategories }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

export function useCategory() {
  const context = useContext(CategoryContext)

  return context
}