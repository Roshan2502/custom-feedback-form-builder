import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routing/Route'
import './index.css'
import "@fontsource/roboto";
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App