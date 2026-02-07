import React, { useEffect, useState } from 'react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import ProjectList from './ProjectList'
import axios from 'axios'

const fetchProjects = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/projects/featured`)

  return response.data.projects.data;
}

function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchProjects();

      if (response) {
        setProjects(response);
      }
    }

    getData();
  }, [])
  return (
      <div className='my-16 py-16'>
          <Container>
              <SectionHeading heading="Projects" paragraph="Here you will find some of the personal projects that I created."/>
        <ProjectList projects={projects} />
          </Container>
    </div>
  )
}

export default ProjectsSection