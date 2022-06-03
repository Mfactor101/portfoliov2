import { motion } from 'framer-motion'
import instagram from "../img/instagram.png"
import linkedIn from "../img/linkedin.png"
import gmail from "../img/gmail.png"

function Hero() {
  return (
    <section id="hero" className="bg-info">
      <div className="container text-center flex flex-col h-screen mx-auto lg:px-24 md:px-20 px-12 justify-center">
        <motion.div 
        animate={{ scale: 1}}
        transition={{ type: "tween", duration: 0.5 }} 
        initial={{scale: 0}}
        className="container">
          <p className="py-4"><span className='attention-animate'>Muheez Owosho</span></p>
          <h1 className="subpixel-antialiased font-extrabold lg:text-8xl md:text-6xl text-4xl py-4"><span className="bg-secondary">Web</span> Developer,</h1>
          <h1 className="subpixel-antialiased lg:ml-24 ml-12 lg:text-8xl md:text-6xl text-4xl py-4">Web <span className="bg-primary">Designer.</span></h1>
        </motion.div>
      </div>

      {/* Instagram icon */}
      <div className="floating icons">
        <div className="icon-container">
          <motion.a animate={{y: [0, -20, 0]}} transition={{ repeat: Infinity, type: "tween", ease: "easeInOut", duration: 3}} className='float-icon'>
            <img className='floatng-image' src={instagram} alt="instagram logo" />
          </motion.a>
        </div>
        
        {/* Linkedin icon*/}
        <div className="icon-container">
          <motion.a href='https://www.linkedin.com/in/abdul-muheez-owosho-079841203/' target="_blank" rel="noopener noreferrer" animate={{y: [0, -30, 0]}} transition={{ repeat: Infinity, type: "tween", ease: "easeInOut", duration: 4}} className='float-icon-1'>
            <img className='floatng-image' src={linkedIn} alt="linkedin logo" />
          </motion.a>
        </div>

        {/* gmail icon */}
        <div className="icon-container">
          <motion.a animate={{y: [0, -40, 0]}} transition={{ repeat: Infinity, type: "tween", ease: "easeInOut", duration: 2.5}} className='float-icon-2'>
            <img className='floatng-image' src={gmail} alt="gmail logo" />
          </motion.a>  
        </div>        
      </div>
    </section>
    
  )
}

export default Hero