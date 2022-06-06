import {ActionType} from "../UnControlledAccordion/reducer";

export const TOGGLE_ON_OFF = 'TOGGL-ON-OFF'

export type StateType={
  on:boolean
}

export const onOffReducer = (state:StateType, action:ActionType):StateType => {
  switch (action.type) {
    case TOGGLE_ON_OFF:
      return {...state, on: !state.on}
    default:
      throw new Error('Bad action on!')
  }
}