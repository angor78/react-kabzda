import {useEffect, useState} from "react";


export default {
  title: 'UseEffect demo'
}


export const SimpleExample = () => {
  console.log('render SimpleExample')
  const [counter, setCounter] = useState(0)
  const [fake, setFake] = useState(0)
  useEffect(() => {
    console.log('render every time without deps')
    document.title = counter.toString()

  })
  useEffect(() => {
    console.log('render first time if deps empty array')

  }, [])
  useEffect(() => {
    console.log('render first time and when changed counter')

  }, [counter])


  return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>counter+</button>
      {fake}
      <button onClick={() => setFake(fake + 1)}>fake+</button>
    </div>
  )
}