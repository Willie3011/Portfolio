
import axios from 'axios'
import Container from './Container'
import { useEffect, useState } from 'react';
const fetchSocials = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/socials`);
    return response.data.data;
}
function Footer() {
    const [socials, setSocials] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const socialData = await fetchSocials();
            setSocials(socialData);
        }

        getData();
    }, [])

    console.log(socials)
    return (
        <div className="bg-primary text-white min-h-60 h-fit">
            <Container>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-8">
                    {/* Quick links */}
                    <div className="">
                        <h3 className='font-semibold text-2xl py-4 tracking-tight'>Quick Links</h3>
                        <ul className='flex flex-col gap-1'>
                            <li>
                                <a className='font-medium text-base hover:underline transition duration-300 ease-in-out' href="#">Home</a>
                            </li>
                            <li>
                                <a className='font-medium text-base hover:underline transition duration-300 ease-in-out' href="#">About</a>
                            </li>
                            <li>
                                <a className='font-medium text-base hover:underline transition duration-300 ease-in-out' href="#">Projects</a>
                            </li>
                            <li>
                                <a className='font-medium text-base hover:underline transition duration-300 ease-in-out' href="#">Contact</a>
                            </li>
                            <li>
                                <a className='font-medium text-base hover:underline transition duration-300 ease-in-out' href="#">Download CV</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contacts */}
                    <div className="">
                        <h3 className='font-semibold text-2xl py-4 tracking-tight'>Contacts</h3>
                        <ul>
                            <li>
                                <a href="#" className='group'>
                                    <span className='font-medium '>Email : </span>
                                    <span className='group-hover:underline transition-all duration-300'>willemapril33@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='group'>
                                    <span className='font-medium '>Phone : </span>
                                    <span className='group-hover:underline transition-all duration-300'>0813182699</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="">
                        <h3 className='font-semibold text-2xl py-4 tracking-tight'>Socials</h3>
                        <ul>
                            {
                                socials && (
                                    socials.map(social => {
                                        return <li key={social._id}>
                                            <a href={social.link} target='_blank' className='font-medium text-base hover:underline transition duration-300 ease-in-out'>{social.name}</a>
                                        </li>
                                    })
                                )
                            }

                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer