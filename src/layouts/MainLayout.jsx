import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  )
}

export default MainLayout