import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='bg-black text-white h-16 border-b border-white/15 relative'>
            <div className="container flex items-center justify-between">
                {/* left */}
                <div className="font-Barlow font-bold text-2xl">WA<em className='text-2xl text-accent'>.</em></div>
                {/* right */}
                <ul className='flex items-center gap-8'>
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