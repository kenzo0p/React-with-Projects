import { useState } from 'react'
import UserContext from './context/UserContext'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'


function App() {


  return (
    <UserContextProvider>
      <h1>hiii</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
