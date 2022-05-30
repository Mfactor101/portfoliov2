function Projects() {
  return (

    <div className="grid place-items-center my-10">
        <div className="p-4 max-w-8xl grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <h1 className="text-4xl font-extrabold md:text-5xl sm:col-span-2 sm:grid sm:gap-4 sm:grid-cols-2"><span className="py-2">Projects</span></h1>
            <p className="">A collection of my best works and ongoing projects.</p>

            {/* First project */}
            <div className="project-card h-32 rounded-lg bg-blue-500 md:square sm:h-auto sm:square p-4 bg-cover bg-[url('./img/git-finder.png')]">
              <p className="my-2"><span className="px-2 rounded-md bg-secondary">Webapp</span></p>
              <h1>Github Finder</h1>
            </div>

            {/* Second project */}
            <div className="project-card bg-blend-darken bg-cover bg-[url('./img/verone-coffee.png')] h-64 rounded-lg  md:col-span-2 sm:col-span-2 sm:h-auto sm:square p-4">
              <div className="container flex flex-col">
                <p className="my-2"><span className="px-2 rounded-md bg-secondary">E-commerce</span></p>
                <h1 className="lg:text-3xl text-lg">Verone Coffee</h1>
                <a ><button className="btn btn-primary">See Live</button></a>
              </div>
            </div>

            {/* Third Project */}
            <div className="project-card h-64 rounded-lg bg-blue-500 sm:col-span-2 md:col-span-3 sm:h-auto sm:square p-4 bg-cover bg-[url('./img/cafp.png')]">
              <div className="container">
                <p className="my-2"><span className="px-2 rounded-md bg-secondary">Webapp</span></p>
                <h1 className="lg:text-3xl text-lg">Totattly Accurate Football Predictor</h1>
                <p className="opacity-75">Artifical intelligence predicting the scores of premier league matches based on recent form and history</p>
                <p>Work in progress</p>
              </div>
            </div>

            {/* Fourth project */}
            <div className="project-card h-32 rounded-lg bg-blue-500 sm:h-auto sm:square"></div>
            {/* Call to action */}
            <p className="md:col-span-2">Have a question? Contact me for any project related queries here. </p>
        </div>
    </div>
  )
}

export default Projects