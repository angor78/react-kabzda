import React, {useState} from "react";

export default {
  title: 'React.memo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
  return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
  console.log('USERS')
  return <div>{props.users.map(u => <div>{u}</div>)}</div>
}
const Users= React.memo(UsersSecret)

export const Example1 = () => {
  let[counter,setCounter]=useState(2)
  let[users,setUsers]=useState(['Andrey', 'Dmitry', 'Igor', 'Sergey'])
  const addUser = () => {
    let newUsers=[...users, 'Sveta'+ new Date().getTime()]
    setUsers(newUsers)
  }

  return( <div>
    <button onClick={()=>setCounter(counter+1)}>+</button>
    <button onClick={addUser}>addUser</button>
    <NewMessagesCounter count={counter}/>
    <Users users={users}/>
  </div>)
}