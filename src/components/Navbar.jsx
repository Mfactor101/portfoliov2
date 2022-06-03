import { Link } from "react-router-dom";
import Projects from "./Projects";
import Footer from "./Footer";
import Hero from "./Hero";


function Navbar() {

  return (
    <div className="drawer">       
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
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
                    <Link to="about" className="btn btn-ghost" href="#">About</Link>
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
            <Hero />
            <Projects />
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

export default Navbar