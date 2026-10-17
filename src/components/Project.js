import React, { useEffect, useState } from 'react'
import '../style/Project.css'

const Project = () => {
    const[projects,setProjects] =  useState([]);
    useEffect(()=>{
      fetch("http://localhost:3001/projectdata").then((project)=> project.json())
      .then((projectdata) => setProjects(projectdata))
    },[])
  return (
    <div className ='projects'>
       <h2 className='pro-title'>Projects</h2>
   
    <div className = 'project-container'>
      {projects.map((project,index)=>(
        <div className='card' key ={index}>
          <h3>{project.title}</h3>
          <p>{project.tech}</p>
        </div>
      ))}

      
    </div>
     </div>
  )
}

export default Project