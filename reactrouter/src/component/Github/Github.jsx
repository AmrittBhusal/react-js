import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData()
    // const[data,setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then((response)=> response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // },[])
    return (
        <div className='max-w-[900px] h-auto m-auto text-center my-9 text-3xl text-amber-700'>
            Github Followers:  {data.followers}
            <div className='w-full my-9 flex justify-center'>
                <img className='w-72' src={data.avatar_url} alt="" />
            </div>
        </div>
    )
}

export const githubInfoloader = async()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return  response.json
}