import About from '../components/About'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import ProjectsSection from '../components/ProjectsSection'

function Homepage() {
  return (
    <div className='bg-secondary h-full font-Poppins'>
      <Banner />
      <About />
      <ProjectsSection />
    </div>
  )
}

export default Homepage