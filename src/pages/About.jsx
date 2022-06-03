import React from 'react';
import heroImage from '../img/hero-image-min.jpg';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';

function About() {
  return (
      <div className="drawer">       
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/> 
        <div className="drawer-content flex flex-col">
            <div className="w-full navbar bg-info">     
                <div className="flex-none lg:hidden md:hidden sm:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <div className="container mx-auto px-4">
                <div className="flex-1 px-2 mx-2">
                    <Link to="/" className="btn btn-ghost">Home</Link>
                </div>
                <div className="flex-none hidden lg:block md:block sm:block">
                    <ul className="menu menu-horizontal">
                    <Link to="#" className="btn btn-ghost" href="#">About</Link>
                    <label htmlFor="contact-modal" className="btn btn-primary">Contact</label>
                    </ul>
                </div>
                </div>          
            </div>

            {/* Modal */}
            <input type="checkbox" id="contact-modal" className="modal-toggle" />
            <label htmlFor="contact-modal" className="modal cursor-pointer">
                <div className="modal-box relative">
                    <label htmlFor="contact-modal" className="btn btn-sm btn-circle absolute right-2 top-2">X</label>
                    <h3 className="text-2xl text-center py-4">Contact me here</h3>
                    <form action="">
                        <label htmlFor="name">Name</label>
                        <input className="cool-input" type="text" id="name" placeholder="Name" required/>

                        <label htmlFor="email">Your E-mail</label>
                        <input className="cool-input" type="email" name="email" id="email" placeholder="Email" required/>

                        <label htmlFor="subject">Subject</label>
                        <input className="cool-input" type="text" placeholder="Subject" />

                        <label htmlFor="message">Message</label>
                        <textarea className="cool-input" name="message" id="message" rows="5" placeholder="The stuff you want to talk about" required></textarea>

                        <button className="btn btn-primary" type="submit">Send</button>
                    </form>
                </div>
            </label>    

            {/* Content goes here */}
            <section id='About' className='bg-info'>
              <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 grid-cols-1">
                  <div className='justify-self-center'>
                    <img src={heroImage} alt="" className="hero-image rounded-lg"/>
                  </div>
                  <div className="m-auto p-4">
                    <h1 className="lg:text-8xl md:text-6xl text-4xl">Hello! 🥤</h1>
                    <p>I'm Muheez, a web developer based in london. I work towards producing high quality code and designs to bring ideas to life. <br></br><br></br>
                    I'm a self taught coder that's always learning keen on learning new ways and methods to improve my craft. I also love helping others become better developers through resource sharing and being in the community. <br></br>
                    Till today I strive to expand my knowledge and skills by constantly learning and building projects. 
                    </p>
                  </div>
                </div>
              </div>            
            </section>
            <section id='experience'>
              <div className="container mx-auto px-4 py-10">
                <div className="grid sm:grid-cols-2 grid-cols-1">
                  <div className="">
                    <h1 className='text-3xl text-center'>Experience</h1>
                  </div>
                  <div className="">
                    <div className="flex flex-col pb-6">
                      <h1 >Freelancer</h1>
                      <p>2022 - Present</p>
                      <div className="divider"></div>
                    </div>
                    <div className="flex flex-col py-6">
                      <h1>Mypocketskill - Frontend Developer</h1>
                      <p>2021 - 2022</p>
                      <div className="divider"></div>
                    </div>
                    <div className="flex flex-col py-6">
                      <h1>BlueskyCitadel - Full Stack Web Developer</h1>
                      <p>2021 - 2021 </p>
                      <div className="divider"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id='cta' className='bg-info py-12'>
              <div className="container px-4 mx-auto text-center">
                <h1 className='text-6xl py-12 '>There's so <span className='text-primary'>much</span> more to see!</h1>
                <p>I'm a fast replier wink wonk 😉. If you want to get to know me more click <label htmlFor="contact-modal" className='cursor-pointer text-primary attention-animate'>here</label>!</p>
              </div>
            </section>
            <Footer />
        </div> 
        
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
            <ul className="menu p-4 overflow-y-auto w-80 bg-info">
            <li><Link to="about">About</Link></li>   
            <li><label htmlFor="contact-modal" className="btn btn-primary">Contact </label></li>
            </ul> 
        </div>
    </div>
  )
}

export default About