import { BsLockFill } from 'react-icons/bs'

function Projects() {
  return (
    <section className="py-12">
      <div id="Projects" className="grid place-items-center">
          <div className="p-4 max-w-8xl grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              <h1 className="text-4xl font-extrabold md:text-5xl sm:col-span-2 sm:grid sm:gap-4 sm:grid-cols-2"><span className="attention-animate py-2">Projects</span></h1>
              <p>A <span className="attention-animate">collection</span> of my best works and ongoing projects.</p>

              {/* First project */}
              <div className="project-card h-48 rounded-lg md:h-auto p-4 bg-cover bg-[url('./img/git-finder.png')]">
                <div className="container flex flex-col h-full">
                  <p className="my-2"><span className="px-2 rounded-md bg-secondary">Webapp</span></p>
                  <h1 className='text-lg text-base-100 font-bold'>Github Finder</h1>
                  <a href="https://github-finder-mfactor101.vercel.app/" target="_blank" rel="noreferrer" className="mt-auto ml-auto"><button className="btn btn-primary">See Live</button></a>
                </div>
              </div>

              {/* Second project */}
              <div className="project-card bg-blend-darken bg-cover bg-[url('./img/verone-coffee.png')] h-64 rounded-lg  md:col-span-2 sm:col-span-2 sm:h-auto sm:square p-4">
                <div className="container flex flex-col h-full">
                  <p className="my-2"><span className="px-2 rounded-md bg-secondary">E-commerce</span></p>
                  <h1 className="lg:text-3xl text-lg">Verone Coffee</h1>
                  <a href="https://veronecoffee.co.uk/" target="_blank" rel="noreferrer" className="mt-auto ml-auto"><button className="btn btn-primary">See Live</button></a>
                </div>
              </div>

              {/* Third Project */}
              <div className="project-card h-64 rounded-lg sm:col-span-2 md:col-span-3 sm:h-auto sm:square p-4 bg-cover bg-[url('./img/cafp.png')]">
                <div className="container flex flex-col h-full">
                  <p className="my-2"><span className="px-2 rounded-md bg-secondary">Webapp</span></p>
                  <h1 className="lg:text-3xl text-lg">Completely Accurate Football Predictor</h1>
                  <p className="opacity-75">Artifical intelligence predicting the scores of premier league matches based on recent form and history</p>
                  <p className="mt-auto ml-auto"> <span className="attention-animate">Work in progress <BsLockFill className='inline'/> </span></p>
                </div>
              </div>

              {/* Fourth project */}
              <div className="project-card h-48 bg-cover bg-[url('./img/webflow.png')] rounded-lg bg-blue-500 p-4">
                <div className="container flex flex-col h-full">
                  <p className="my-2"><span className="px-2 rounded-md bg-secondary">Template</span></p>
                  <h1 className="lg:text-3xl text-lg font-bold text-base-100">Webflow Project Template</h1>
                  <a href="https://portfolio-template-muheez.webflow.io/" target="_blank" rel='noreferrer' className='mt-auto ml-auto'><button className='btn btn-primary'>See Live</button></a>
                </div>
              </div>
              {/* Call to action */}
              <p className="md:col-span-2 self-center"><span className="attention-animate">Have a question?</span> Contact me for any project related queries <label htmlFor="contact-modal" className="cursor-pointer attention-animate hover:text-primary">here.</label> </p>
          </div>
      </div>
    </section>
  )
}

export default Projects