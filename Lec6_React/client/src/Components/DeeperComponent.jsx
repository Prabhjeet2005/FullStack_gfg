import React from 'react'
import { Outlet } from 'react-router-dom'

const DeeperComponent = () => {
  return (
    <>
    <h1>This is Deeper Component</h1>
    <Outlet />
    </>
  )
}

export default DeeperComponent