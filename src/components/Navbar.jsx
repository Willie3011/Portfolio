import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    // Function to lock/unlock scroll
    const toggleScrollLock = useCallback((shouldLock) => {
        if (shouldLock) {
            // Save current scroll position
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
        } else {
            // Restore scroll position
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
            }
        }
    }, []);

    // Lock scroll when menu opens, unlock when it closes
    useEffect(() => {
        toggleScrollLock(openMobileMenu);

        // Cleanup: unlock if component unmounts while menu is open
        return () => {
            if (openMobileMenu) {
                toggleScrollLock(false);
            }
        };
    }, [openMobileMenu, toggleScrollLock]);

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-black text-white h-16 border-b border-white/15'>
            <div className="container flex items-center justify-between relative">
                {/* left */}
                <div className="font-Barlow font-bold text-2xl">WA<em className='text-2xl text-accent'>.</em></div>
                {/* right */}
                <ul className='hidden items-center gap-8 md:flex'>
                    <li><Link className='nav-link' to='/'>Home</Link></li>
                    <li><Link className='nav-link' to='/about'>About</Link></li>
                    <li><Link className='nav-link' to='/work'>My Work</Link></li>
                    <li><Link className='nav-link' to='/contact'>Let's Connect</Link></li>
                </ul>

                {/* mobile menu button */}
                <button className={"md:hidden flex hamburger transition-all duration-300 ease-out"} onClick={() => { setOpenMobileMenu(prev => !prev) }}>
                    <span className={openMobileMenu ? 'rotate-45 translate-y-2' : 'translate-y-0 rotate-0'}></span>
                    <span className={openMobileMenu ? 'opacity-0' : 'opacity-100'}></span>
                    <span className={openMobileMenu ? '-rotate-45 -translate-y-2' : 'translate-y-0 rotate-0'}></span>
                </button>
            </div>

            <ul className={`absolute z-10 overflow-y-hidden top-20 right-0 left-0 md:hidden bg-black text-white flex w-full h-screen text-xl ${openMobileMenu ? 'translate-x-0' : 'translate-x-full'} shadow flex-col text-left px-3 py-12 gap-8 transition-transform duration-300 ease-in-out`}>
                <li className='ml-8'>
                    <Link to="/" className='uppercase font-medium px-4 py-2 hover:bg-gray-200/10 hover:text-accent transition-all duration-300 rounded-sm'>Home</Link>
                </li>
                <li className='ml-8'>
                    <Link to="/" className='uppercase font-medium px-4 py-2 hover:bg-gray-200/10 hover:text-accent transition-all duration-300 rounded-sm'>About</Link>
                </li>
                <li className='ml-8'>
                    <Link to="/projects" className='uppercase font-medium px-4 py-2 hover:bg-gray-200/10 hover:text-accent transition-all duration-300 rounded-sm'>Projects</Link>
                </li>
                <li className='ml-8'>
                    <Link to="/" className='uppercase font-medium px-4 py-2 hover:bg-gray-200/10 hover:text-accent transition-all duration-300 rounded-sm'>Contact</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar