import { motion } from 'framer-motion'
// import { FaInstagram } from "react-icons/fa";

function Hero() {
  return (
    <section id="hero" className="bg-info">
      <div className="container flex flex-col h-screen mx-auto lg:px-24 md:px-20 px-12 justify-center">
        <motion.div 
        animate={{ scale: 1}}
        transition={{ type: "tween", duration: 0.5 }} 
        initial={{scale: 0}}
        drag
        dragConstraints={{top: 100, left: 50, right: 50, bottom: 0}}
        className="container">
          <p className="py-4">AbdulMuheez Owosho</p>
          <h1 className="font-extrabold lg:text-8xl md:text-6xl text-4xl py-4"><span className="bg-secondary">Web</span> Developer,</h1>
          <h1 className="lg:ml-24 ml-12 lg:text-8xl md:text-6xl text-4xl py-4">Web <span className="bg-primary">Designer.</span></h1>
        </motion.div>
      </div>
      <div className="floating icons">
        <motion.a whileHover={{ scale: 2 }} transition={{ type: "tween", duration: 1}} className='float-icon'></motion.a>
        <a className='float-icon-1'></a>
        <a className='float-icon-2'></a>
      </div>
    </section>
    
  )
}

export default Hero