import About from '../components/About'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'

function Homepage() {
  return (
    <div className='bg-secondary h-full font-Poppins'>
      <Navbar />
      <Banner />
      <About />
      
    </div>
  )
}

export default Homepage