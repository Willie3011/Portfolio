import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Container from '../components/Container'
import { useParams } from 'react-router-dom'

const fetchProject = async (id) => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/projects/${id}`)
  return response.data.data;
}


function ProjectPage() {

  const { id } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["project", id],
    queryFn: () => fetchProject(id),
  })

  if (isPending) return "Loading...";

  if (error) return console.log(error);

  return (
    <div>
      <Container>
        {data.title}
      </Container>
    </div>
  )
}

export default ProjectPage