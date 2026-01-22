import React, { useEffect, useState } from 'react'
import Container from './Container'
import axios from 'axios'

function About() {
    const [paragraphs, setParagraphs] = useState([]);
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
                    const paragraphArray = aboutResponse?.data?.data?.content.split('\n\n');

                    setParagraphs(paragraphArray.filter(p => p.trim() !== ''));
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

    return (
        <div className="my-16">
            <Container>
                <div className="flex flex-col gap-4 mb-8">
                    <h2 className='uppercase font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 text-center before:content-[] before:h-2 before:w-1/3 before:bg-accent'>About Me</h2>
                    <p className='text-center max-w-200 text-primary ' >Here you will find more information about me, What I do, and my current skills mostly in terms of programming and technology.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 ">
                    {/* About me */}
                    <div className="flex flex-col gap-8">
                        <h3 className='font-bold text-xl capitalize'>This is who I am!</h3>
                        <div className="flex flex-col gap-4">
                            {
                                paragraphs && (
                                    paragraphs.map(paragraph => {
                                        return <p className='text-primary' key={paragraph}>{paragraph}</p>
                                    })
                                )
                            }
                        </div>
                        <button className='bg-accent hover:bg-amber-400 text-white font-medium py-4 px-12 rounded-lg w-fit transition-all ease-in-out duration-300 hover:-translate-y-1 cursor-pointer'>Contact</button>
                    </div>
                    {/* Skills */}
                    <div className="">
                        <h3 className='font-bold mb-8 text-xl capitalize'>my skills</h3>
                        <div className="flex gap-4 flex-wrap">
                            {
                                skills && (
                                    skills.map(skill => {
                                        return <span className='text-primary rounded-md p-4 bg-gray-700/10 font-medium' key={skill._id}>{skill.name}</span>
                                    })
                                )
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About