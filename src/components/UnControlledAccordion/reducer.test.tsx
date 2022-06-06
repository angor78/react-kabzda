import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";


test('Reducer should be change collapsed false', () => {
  let state: StateType = {
    collapsed: true
  }
  let changedState = reducer(state, {type: TOGGLE_COLLAPSED})
  expect(changedState.collapsed).toBe(false)
})
test('Reducer should be change collapsed true', () => {
  let state: StateType = {
    collapsed: false
  }
  let changedState = reducer(state, {type: TOGGLE_COLLAPSED})
  expect(changedState.collapsed).toBe(true)
})
test('Reducer should be returned throw', () => {
  let state: StateType = {
    collapsed: false
  }
  expect(()=> {
    reducer(state, {type: 'FAKE'})
  }).toThrowError()
})