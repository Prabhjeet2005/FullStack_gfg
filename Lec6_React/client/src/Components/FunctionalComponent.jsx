import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
    <Link to="fromLink" >fromLink</Link>
    </>
  )
}

export default FunctionalComponent