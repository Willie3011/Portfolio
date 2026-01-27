import Container from '../components/Container';
import ProjectList from '../components/ProjectList';
import SectionHeading from "../components/SectionHeading";
function ProjectsPage() {
  return (
    <div className='py-8'>
      <Container>
        <SectionHeading heading="My Projects"/>
        <ProjectList />
      </Container>
    </div>
  )
}

export default ProjectsPage