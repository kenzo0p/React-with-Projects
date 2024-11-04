import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({ children, authentication = true }) {


    const navigate = useNavigate()

    const [loader, setLoader] = useState()
    const authstatus = useSelector(state => state.auth.status)

    useEffect(() => {
        // todo : make it more easy

        // if(authstatus === true) {
        //     navigate("/")
        // }else if(authstatus === false){
        //     navigate("/login")
        // }




        if (authentication && authstatus !== authentication) {
            navigate("/login")
        } else if (!authentication && authstatus !== authentication) {
            navigate("/")
        }
        setLoader(false)
    }, [authstatus, navigate, authentication])


    return (
        <div>AuthLayout</div>
    )
}

return loader ? <h1>Loading...</h1> : <>{children}</>

