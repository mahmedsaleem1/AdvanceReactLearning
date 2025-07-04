import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const githubData = useLoaderData()
    // const [githubData, setGithubData] = useState([])

    // useEffect( () => { 
    //     fetch('https://api.github.com/users/mahmedsaleem1')
    //     .then(response => response.json())
    //     .then(githubData => setGithubData(githubData))
    // })

  return (
    <div>
        <h1>
            My Github Profile
        </h1>
        <p>
            Followers:  {githubData.followers}
        </p>
        <img src={githubData.avatar_url} alt="" />
    </div>
  )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mahmedsaleem1')
    return response.json()
}

export default Github