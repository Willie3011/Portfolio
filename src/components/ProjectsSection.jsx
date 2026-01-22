import React from 'react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import ProjectList from './ProjectList'

function ProjectsSection() {
  return (
      <div className='my-16 py-16'>
          <Container>
              <SectionHeading heading="Projects" paragraph="Here you will find some of the personal projects that I created."/>
              <ProjectList/>
          </Container>
    </div>
  )
}

export default ProjectsSection