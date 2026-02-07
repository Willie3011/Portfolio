import Project from './Project';



function ProjectList({projects}) {
    
    return (
        <div className="flex flex-col items-center justify-center gap-8">
            {projects.map(project => {
                return <Project key={project._id} project={project} />
            })}
        </div>
    )
}

export default ProjectList