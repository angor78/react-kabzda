import React, {useMemo, useState} from "react";


export default {
  title: 'UseMemo'
}


export const DifficultCountingExample = () => {
  const [a, setA] = useState(3)
  const [b, setB] = useState(3)

  let resultA = 1
  let resultB = 1

  resultA = useMemo(() => {
    let result = 1
    for (let i = 1; i <= a; i++) {
      let fake = 0
      while (fake < 10000000) {
        fake++
        const fakeValue = Math.random()
      }
      result = result * i
    }
    return result
  }, [a])


  for (let i = 1; i <= b; i++) {
    resultB = resultB * i
  }

  return (
    <div>
      <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
      <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
      <hr></hr>
      <div>Result for A:{resultA}</div>
      <div>Result for B:{resultB}</div>

    </div>
  )
}


const UsersSecret = (props: { users: Array<string> }) => {
  console.log('USERS SECRET')
  return <div>{props.users.map(u => <div>{u}</div>)}</div>
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
  console.log('HELP')

  let [counter, setCounter] = useState(2)
  let [users, setUsers] = useState(['Andrey', 'Dmitry', 'Igor', 'Sergey'])
  const addUser = () => {
    let newUsers = [...users, 'Sveta' + new Date().getTime()]
    setUsers(newUsers)
  }

  let newArr = useMemo(() => {
   return users.filter(u => u.toLowerCase().indexOf('e') > -1)
  }, [users])
  return (<div>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <button onClick={addUser}>add</button>
    {counter}
    <Users users={newArr}/>
  </div>)
}
