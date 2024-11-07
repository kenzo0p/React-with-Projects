import React from 'react'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
import { useDispatch } from 'react-redux'
function LogOutBtn(){

    const disPatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            disPatch(logout)
        })
    }
    return(
        <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rouded-full' onClick={logoutHandler}>Logout</button>
    )
}

export default LogOutBtn;