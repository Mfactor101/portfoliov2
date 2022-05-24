function Navbar() {
  return (
    // <div className="container mx-auto px-4">
    //     <div className="navbar">
    //         <div className="flex-1">
    //             <button className="btn btn-ghost">MuheezCodes</button>
    //         </div>
    //         <div className="navbar-start">
    //             <div className="dropdown">
    //                 <label tabindex="0" class="btn btn-ghost lg:hidden">
    //                     <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    //                 </label>     
    //                 <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2">
    //                     <li><a href="#">Work</a></li>
    //                     <li><a href="#">About</a></li>
    //                     <li><a href="#">Contact</a></li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden md:hidden sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li tabIndex="0">
          <a href="#" className="justify-between">Work</a>
        </li>
        <li><a href="#">About</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">MuheezCodes</a>
  </div>
  <div className="navbar-center hidden lg:flex md:flex sm:flex">
    <ul className="menu menu-horizontal p-0">
      <li><a href="#">Work</a></li>
      <li tabIndex="0">
        <a href="#">About</a>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Contact Me</a>
  </div>
</div>
  )
}

export default Navbar