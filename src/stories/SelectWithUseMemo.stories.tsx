import React, {useMemo, useState} from 'react'
import {v1} from "uuid";
import {Select} from "@chakra-ui/react";

export default {
  title: 'Select with hook useMemo',

}
const NewMessagesCounter = (props: { count: number }) => {
  console.log('COUNTER')
  return <div>{props.count}</div>
}
const CitiesSecret = (props: { cities: Array<CityType> }) => {
  console.log('CITY SECRET')
  return <ul>{props.cities.map(c =>
    <li>{c.title}</li>)}</ul>
}

const Cities = React.memo(CitiesSecret)
const Counter = React.memo(NewMessagesCounter)

export type CityType = { id: string, title: string, country: string, population: number }
export const SelectWithUseMemo = () => {
  let startState: Array<CityType> = [
    {id: v1(), title: 'Penza', country: 'Russia', population: 600000},
    {id: v1(), title: 'Moscow', country: 'Russia', population: 10000000},
    {id: v1(), title: 'Irkutsk', country: 'Russia', population: 400000},
    {id: v1(), title: 'Minsk', country: 'Belarus', population: 2000000},
    {id: v1(), title: 'Bobruisk', country: 'Belarus', population: 200000},
    {id: v1(), title: 'Mogilev', country: 'Belarus', population: 100000},
    {id: v1(), title: 'Temirtau', country: 'Kazakhstan', population: 200000},
    {id: v1(), title: 'Karaganda', country: 'Kazakhstan', population: 500000},
    {id: v1(), title: 'Almatu', country: 'Kazakhstan', population: 2000000}
  ]
  let [cities, setCities] = useState<Array<CityType>>(startState)
  let [counter, setCounter] = useState(2)

  const reducer = (state: Array<CityType>, action: any): Array<CityType> => {
    switch (action.type) {
      case "CHOOSE-COUNTRY": {
        let copy = [...state]
        return copy.filter(el => el.country === action.country)
      }
      case "CHOOSE-POPULATION": {
        let copy = [...state]
        return copy.filter(el => el.population <= action.population)
      }
      default:
        return state
    }
  }

  const selectCountry = (country: string) => {
    setCities(reducer(startState, {type: "CHOOSE-COUNTRY", country: country}))
  }
  const selectPopulation = (population: number) => {
    setCities(reducer(startState, {type: "CHOOSE-POPULATION", population: population}))
  }
  let memoCities = useMemo(() => {
    return cities
  }, [cities])
  let memoCounter = useMemo(() => {
    return counter
  }, [counter])

  return (
    <div>
      <Cities cities={memoCities}/>
      <Counter count={memoCounter}/>
      <Select>
        <option onClick={() => setCities(startState)}>All</option>
        <option onClick={() => selectCountry('Russia')}>Russia</option>
        <option onClick={() => selectCountry('Belarus')}>Belarus</option>
        <option onClick={() => selectCountry('Kazakhstan')}>Kazakhstan</option>
      </Select>
      <Select>
        <option onClick={() => setCities(cities)}>All</option>
        <option onClick={() => selectPopulation(1000000)}>1000000 and less...</option>
        <option onClick={() => selectPopulation(500000)}>500000 and less...</option>
        <option onClick={() => selectPopulation(200000)}>200000 and less...</option>
      </Select>
      <button onClick={() => setCounter(counter + 1)}>+</button>

    </div>
  )
}

