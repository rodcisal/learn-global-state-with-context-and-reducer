import { reducer } from './store'

test('increments points by 1', () => {
  const newState = reducer({ points: 0 }, { type: 'increment' })
  expect(newState.points).toBe(1)
})

test('increments points by 2 if action called two times', () => {
  const newState = reducer({ points: 0 }, { type: 'increment' })
  const finalState = reducer(newState, { type: 'increment' })
  expect(finalState.points).toBe(2)
})

test('reset points', () => {
  const newState = reducer({ points: 22 }, { type: 'reset' })
  expect(newState.points).toBe(0)
})

test('returns same points if unknown action is passed', () => {
  const newState = reducer({ points: 22 }, { type: 'unknown' })
  expect(newState.points).toBe(22)
})
