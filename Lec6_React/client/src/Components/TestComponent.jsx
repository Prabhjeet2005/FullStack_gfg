import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const TestComponent = () => {
  return (
    <>
    <br/>
    <Link to="/" >Take me Home "/" Route</Link>
    <br/>
    <Link to="deeper"  >This is "route1/deeper" route</Link>
    <Outlet /> 
    </>
  )
}

export default TestComponent