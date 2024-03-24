import { createContext, useContext } from 'react'
import { Dependencies } from '@/dependencies'

export const DependenciesContext = createContext<Dependencies | null>(null)

export const useDependencies = () => {
  const context = useContext(DependenciesContext)
  if (!context) {
    throw new Error(
      'useDependencies は DependencyContextProvider 内で使用する必要があります',
    )
  }
  return context
}
