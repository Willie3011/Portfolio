import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
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
            </div>
        </nav>
    )
}

export default Navbar