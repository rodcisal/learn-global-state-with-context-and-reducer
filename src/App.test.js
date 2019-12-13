import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from './App'

test('renders points in zero', () => {
  const { getByText } = render(<App />)
  const initialText = getByText(/State is: 0/i)
  expect(initialText).toBeInTheDocument()
})

test('increment count on click on increment button', () => {
  const { getByText } = render(<App />)
  fireEvent.click(getByText(/increment/i))
  const text = getByText(/State is: 1/i)
  expect(text).toBeInTheDocument()
})

test('increment two times the count on two clicks on increment button', () => {
  const { getByText } = render(<App />)
  fireEvent.click(getByText(/increment/i))
  fireEvent.click(getByText(/increment/i))
  const text = getByText(/State is: 2/i)
  expect(text).toBeInTheDocument()
})
