import { FC, createContext, ReactNode, useMemo, useState, useContext, Dispatch, SetStateAction } from 'react'

interface Props {
  children?: ReactNode
}

export interface ErrorContextProps {
  isError: boolean
  setIsError: Dispatch<SetStateAction<boolean>>
}

const ErrorContext = createContext<ErrorContextProps>({} as ErrorContextProps)
 //Below is for Chrome React dev Tools extension to 
 //display the name of the context instead of "Context.provider"
ErrorContext.displayName = 'ErrorContext' 

//Custom Hook for exporting the state to other files.
export const useError = () => {
  return useContext(ErrorContext)
}

//This component will get wrapped at the root level and all of it's children will have access to the "isError and setIsError" values.
const ErrorProvider: FC<Props>= ({children}) => { 
  // In this case we want this state to be available globally
  const [isError, setIsError] = useState(false)

  //The state should be memoized to maintain the referential equality/ same location in memory. If not 
  // every time this context is called a new location in memory will be created for the values.
  const error = useMemo(() => {
    return { isError, setIsError }
  }, [isError, setIsError])

  // the value prop that is passed down are available to all of it's children.
  return <ErrorContext.Provider value={error}>{children}</ErrorContext.Provider>
}

export default ErrorProvider
