import React, { useEffect, useState } from 'react'

const FunctionalComponent = (props) => {
  const [name, setName] = useState(props.name)
  const [id, setId] = useState(1)
  const [user,setUser] = useState({})
  useEffect(() => {
    console.log("Id Updated (componentdidUpdate))");
  }, [id])
  useEffect(() => {
console.log("all useEffect (componentDidUpdate)");
  }, [])
  
  
  return (
    <>
    <h1>hi {name} {id}</h1>
    <button onClick={()=>setId(id+1)}>click me</button>
    </>
  )
}

export default FunctionalComponent