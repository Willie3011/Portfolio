import axios from "axios"
import { useEffect, useState } from "react";
import Project from './Project';

const fetchProjects = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/projects`)

    return response.data.projects.data;
}

function ProjectList() {
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
        <div className="flex flex-col items-center justify-center gap-8">
            {projects.map(project => {
                return <Project key={project._id} project={project} />
            })}
        </div>
    )
}

export default ProjectList