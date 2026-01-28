import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Container from '../components/Container';
import ImageComp from '../components/ImageComp';
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
    <div className='h-fit bg-secondary py-8'>
      <Container>
        {/* Title */}
        <h1 className='text-center mb-5 font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 tracking-tight'>
          {data.title}
        </h1>
        {/* Overview / */}

        {/* Image */}
        <ImageComp src={data.image.filePath} className="object-contain" />
        {/* Description */}
        <div className="my-8">
          <h3 className='text-xl sm:text-2xl font-medium mb-4'>Project Description</h3>
          <p className='text-base sm:text-lg text-primary'>{data.desc}</p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-col gap-4 mb-8">
          <h3 className='font-medium text-lg'>Tech Stack</h3>
          <div className="flex items-center gap-8">
            {
              data.techStack.map(stack => {
                return <span key={stack} className='p-4 uppercase rounded bg-gray-900/10 font-medium'>{stack}</span>
              })
            }
          </div>
        </div>

        <div className="flex gap-4 items-center justify-between">
          <a href={data.githubLink} target='_blank' className='w-full border border-accent bg-transparent text-primary hover:text-white hover:bg-accent font-medium text-center px-12 py-3 rounded-lg text-lg hover:-translate-y-1 transition-all duration-300 ease-in-out hover:shadow-lg cursor-pointer'>Github</a>
          <a href={data.projectLink} target='_blank' className='w-full bg-accent px-12 py-3 text-center text-lg text-white font-medium rounded-lg hover:bg-amber-400 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 cursor-pointer'>Live</a>
        </div>

      </Container>
    </div>
  )
}

export default ProjectPage