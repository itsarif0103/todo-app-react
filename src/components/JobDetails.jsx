import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetails = () => {

    const jobDetails = useLoaderData()
  return (
    <div className='job-details'>
      <p><b>Job title:</b> {jobDetails.title}</p>
      <p><b>Salary:</b> {jobDetails.salary}</p>
      <p><b>Job Location:</b> {jobDetails.location}</p>
      <p><b>Job Description:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rerum perferendis soluta reprehenderit doloremque, aperiam neque assumenda eos quas? Autem quo consequatur libero. Facilis nihil at suscipit vitae cumque officia deserunt nesciunt, alias itaque tenetur perspiciatis culpa est atque iusto odio voluptatibus labore qui dolorem accusantium! Velit ullam praesentium aliquam eos repellendus corporis recusandae excepturi doloribus quos molestias repellat esse ipsum est ratione, dolor facilis quaerat qui, sequi culpa ad dicta magnam et minus neque! Reiciendis, mollitia beatae voluptas quaerat deserunt impedit ea. Temporibus consequuntur quaerat nam commodi iusto. Vitae repudiandae culpa odio consectetur repellendus eum repellat harum unde, numquam pariatur doloremque dolorum consequuntur esse dignissimos tenetur aliquid commodi possimus voluptas architecto alias delectus illum ex. Aut laborum reiciendis ipsam, culpa praesentium enim!</p>
    <button>Apply Now   </button>
    </div>
  )
}

export default JobDetails

export const jobDetailsLoader = async ({params})=>{
    const {id} = params;
    const res = await fetch("http://localhost:5000/Jobs/" + id);
    if(!res.ok){
        throw new Error("Could not found the job details!");
        
    }
    return res.json();
}
