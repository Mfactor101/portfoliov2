import heroImage from "../img/hero-image-min.jpg"

function Hero() {
  return (
      <div className="container mx-auto px-4 mt-12">
          <div className="flex ">
            <div>
              <img src={heroImage} alt="" className="hero-image rounded-lg"/>
            </div>
            <div className="flex flex-col m-auto">
              <h1 className="lg:text-8xl md:text-6xl text-4xl">About Me</h1>
              <p>I've spent most of my years learning new ways to create and bring ideas to life.This is how I stumbled across coding.
              </p>
            </div>
          </div>
      </div> 
  )
}

export default Hero