import React from 'react'
import { Link } from 'react-router-dom'
import ImageComp from './ImageComp'

function Project({project}) {
  return (
    <div className='grid sm:grid-cols-2 gap-8 mb-8 m-4 '>
      {/* image */}
      <ImageComp
        src={project.image?.filePath}
        w={600}
        h={400}
        className="object-contain"
        
      />
      {/* project details */}
      <div className="flex flex-col gap-12">
        <h3 className='capitalize font-bold text-2xl text-gray-900 tracking-tight'>{project.title}</h3>
        {/* short description */}
        <p className='text-base font-medium text-primary text-ellipsis max-w-80 sm:max-w-100 text-justify'>{project.desc}</p>
        <Link to={`/project/${project._id}`} className='px-12 py-3 rounded-lg bg-accent hover:bg-amber-400 hover:shadow-lg w-fit font-medium text-white transition-all ease-in-out duration-300 hover:-translate-y-1 cursor-pointer'>View Project</Link>
      </div>
    </div>
  )
}

export default Project