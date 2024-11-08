import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components/index'
import  authService from './appwrite/auth'
import {Outlet} from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()



  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout())
        }
      })
      .catch((error) => {
        console.log("ERROR IN AUTHSERVICE:DURING GETTING USER", error)
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-hscreen flex felx-wrap content-between bg-slate-400'>
      <div className="w-full block">
        <Header />
        <main>
         TODO: <Outlet/>
        </main>
        <Footer />
      </div>
    </div>
  ) : null


}

export default App
