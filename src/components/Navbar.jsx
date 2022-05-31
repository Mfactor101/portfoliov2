import App from "./HeroAnimation";
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
                    <button className="btn btn-ghost">MuheezCodes</button>
                </div>
                <div className="flex-none hidden lg:block md:block sm:block">
                    <ul className="menu menu-horizontal">
                    <li><a href="#Projects">Work</a></li>
                    <li><a href="#">About</a></li>
                    <button className="btn btn-primary">Contact </button>
                    </ul>
                </div>
                </div>          
            </div>

            
            {/* Content goes here */}
            <Hero />
            <Projects />
            <Footer />                
        </div> 
        
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
            <ul className="menu p-4 overflow-y-auto w-80 bg-info">
            <li><a href="#">Work</a></li>
            <li><a href="#">About</a></li>   
            <li><button className="btn btn-primary">Contact </button></li>
            </ul> 
        </div>
    </div>
    
  )

}

export default Navbar