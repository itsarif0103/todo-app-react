import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const JobPages = () => {

    const jobData = useLoaderData()
  return (
    <div className='jobs'>
      {jobData.map((job)=>{
        return <Link to={job.id.toString()} key={job.id}>
            <h4>{job.title}</h4>
            <h3>{job.salary}</h3>
            <p>{job.location}</p>
        </Link>
      })}
    </div>
  )
}

export default JobPages

export const jobsLoader = async ()=>{
    const res = await fetch("http://localhost:5000/Jobs")
    if(!res.ok){
        throw new Error("Could not find job list!!");
        
    }
    return res.json();
}
