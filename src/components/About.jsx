import React, { useEffect, useState } from 'react'
import Container from './Container'
import axios from 'axios'
import SectionHeading from './SectionHeading';
import parse, { domToReact } from 'html-react-parser';

// Icons
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";




function About() {
    const [about, setAbout] = useState("");
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const endpoints = [
                    `${import.meta.env.VITE_API_URL}/about`,
                    `${import.meta.env.VITE_API_URL}/skills`,
                ]

                const [aboutResponse, skillsResponse] = await Promise.all([
                    axios.get(endpoints[0]),
                    axios.get(endpoints[1]),
                ])

                if (aboutResponse?.data?.data?.content) {
                    setAbout(aboutResponse.data.data.content)
                }

                if (skillsResponse?.data?.data) {
                    setSkills(skillsResponse.data.data);
                }
            } catch (error) {
                console.log("Error fetching about data: ", error)
            }
        }

        fetchAllData();
    }, [])
    
    console.log(about)

    return (
        <div id='about' className="bg-black text-white">
            <Container>
                <div className="grid md:grid-cols-2 gap-8 ">
                    {/* About me */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-[clamp(50px,10vw,80px)] leading-tight font-Barlow font-bold tracking-tight uppercase text-transparent bg-clip-text bg-linear-to-r from-white/95 via-gray-400 to-white">
                            <span className="sm:block">This is </span>
                            who I am
                        </h2>
                        <div className="flex flex-col gap-4">
                            {about && parse(about, {
                                replace: (node) => {
                                    if (node.type === 'tag' && node.name === 'p') { 
                                        const children = domToReact(node.children)
                                        return (
                                            <p className='text-[#cbd5e1] font-Inter leading-relaxed [&_strong]:text-[#e5e7e1] [&_strong]:font-semibold'>
                                                {children}
                                            </p>
                                        )
                                    }
                                }
                            })}
                        </div>
                    </div>
                    {/* Skills */}
                    <div className="bg-[rgba(255,255,255,0.02)] p-8 rounded-4xl flex flex-col gap-x-3.5 gap-y-6 h-fit">
                        <h3 className='font-medium text-[1.5rem] mb-[1.8rem] uppercase font-Barlow text-[#e5e7eb] '>my skills</h3>
                        <div className="grid md:grid-cols-2 gap-4 flex-wrap">
                            {
                                skills && (
                                    skills.map(skill => {
                                        return <span className="flex items-center gap-3 font-normal p-2 text-[d1d5db] border-b border-[rgba(255,255,255,0.02)] hover:border-[rgba(255,255,255,0.1)]" key={skill._id}>{skill.name}</span>
                                    })
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className="mt-14 pt-8 border-t border-[rgba(255,255,255,0.02)] flex justify-between items-center flex-wrap gap-5">
                    <div className="flex items-center justify-center w-full md:w-fit gap-4">
                        <a href="" className="text-white/40 hover:text-accent bg-white/5 transition-colors duration-300 border border-white/25 hover:border-accent/40 hover:bg-accent/5 p-2 rounded-lg text-lg">
                            <FaFacebookF />
                        </a>
                        <a href="" className="text-white/40 hover:text-accent bg-white/5 transition-colors duration-300 border border-white/25 hover:border-accent/40 hover:bg-accent/5 p-2 rounded-lg text-lg">
                            <FaXTwitter />
                        </a>
                        <a href="" className="text-white/40 hover:text-accent bg-white/5 transition-colors duration-300 border border-white/25 hover:border-accent/40 hover:bg-accent/5 p-2 rounded-lg text-lg">
                            <FaInstagram />
                        </a>
                        <a href="" className="text-white/40 hover:text-accent bg-white/5 transition-colors duration-300 border border-white/25 hover:border-accent/40 hover:bg-accent/5 p-2 rounded-lg text-lg">
                            <FaWhatsapp />
                        </a>
                    </div>
                    <div className="flex items-center justify-center w-full md:w-fit">
                        <a href='/Willem_April.pdf' download className="flex items-center gap-3 bg-accent hover:bg-amber-400 text-black font-medium py-4 px-8 rounded-lg w-fit transition-all ease-in-out duration-300 hover:-translate-y-1 cursor-pointer">
                            <IoMdDownload /> Download Resume
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About