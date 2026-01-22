
function SectionHeading({ heading, paragraph }) {
  return (
      <div className="flex flex-col items-center gap-4 mb-8 md:mb-16">
          <h2 className='relative uppercase font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 text-center pb-4 mb-4'>
              {heading}
              <span className='absolute left-1/2 bottom-0 h-1.5 w-40 bg-linear-to-r from-transparent via-accent to-transparent -translate-x-1/2 transition-all duration-500 ease-out'></span>
          </h2>
          <p className='text-center max-w-200 text-primary ' >{paragraph}</p>
      </div>
  )
}

export default SectionHeading