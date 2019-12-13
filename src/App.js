import React from 'react'
import './App.css'
import { StoreProvider, useStore } from './store'

const INCREMENT = 'increment'

function ChildComponent () {
  const { state, dispatch } = useStore()
  return (
    <div>
      State is: {state.points}
      <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
    </div>
  )
}

function App () {
  return (
    <StoreProvider>
      <ChildComponent />
    </StoreProvider>
  )
}

export default App
