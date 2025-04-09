import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams()
    return (
        <div className='max-w-[900px] py-5 my-9 h-auto m-auto text-2xl text-center bg-amber-800'>User Id: {userid}</div>
    )
}

export default User
