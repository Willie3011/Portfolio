import Container from './Container'

function Banner() {
    return (
        <div className="bg-primary text-white px-0 py-16 text-center flex items-center justify-center min-h-200">
            <Container>
                <h1 className='uppercase font-bold mb-4 text-[2rem] md:text-5xl'>Hey I'm Willem April</h1>
                <p className='text-xl max-w-200 my-0 mx-auto text-secondary mb-4'>I am a passionate web developer who enjoys learning through building real-world projects. I’m constantly improving my skills while creating meaningful applications.</p>
                <div className="flex items-center justify-center gap-4 pt-4 max-sm:flex-col">
                    <button className='inline-block px-8 sm:px-12 py-4 border border-accent rounded-lg font-medium text-base text-accent bg-transparent text-nowrap hover:bg-accent hover:text-white transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg'>Download CV</button>
                    <button className='inline-block px-8 sm:px-12 py-4 bg-accent hover:bg-amber-400 font-medium text-white transition-all duration-300 text-nowrap cursor-pointer text-base border-none rounded-lg hover:-translate-y-1 hover:shadow-lg'>View Projects</button>
                </div>
            </Container>
        </div>
    )
}

export default Banner