import React, { createContext, useContext, useReducer } from 'react'

const StoreContext = createContext()
const initialState = { points: 0 }

export const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        points: state.points + 1
      }
    case 'decrement':
      return {
        points: state.points - 1
      }
    case 'reset':
      return {
        points: 0
      }

    default:
      return state
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // creates provider and gets children to be rendered
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)
