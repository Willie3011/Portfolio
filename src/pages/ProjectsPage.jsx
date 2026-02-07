import axios from 'axios';
import Container from '../components/Container';
import ProjectList from '../components/ProjectList';
import SectionHeading from "../components/SectionHeading";
import { useEffect, useState } from 'react';

const fetchProjects = async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/projects`)

  return response.data.projects.data;
}

function ProjectsPage() {
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
    <div className='py-8'>
      <Container>
        <SectionHeading heading="My Projects"/>
        <ProjectList projects={projects}/>
      </Container>
    </div>
  )
}

export default ProjectsPage