function Footer() {
  return (
    <section className="w-full page-footer">
      <div className="container mx-auto px-4 py-24 ">
        <h1 className="text-center text-4xl">You've <span className="attention-animate text-primary"> reached</span> the end of the page but...</h1>
        <div className="divider"></div>
        <div className="grid sm:grid-cols-2 grid-cols-1 mt-10 gap-4">
          <div className="text-center">
            <p>It can't stop here...</p>
            <h1>Let's get in touch! I'm here to connect!</h1>
          </div>
          <div className="text-center">
            <h1 className="md:text-2xl text-lg attention-animate text-primary">muheez@muheezdesign.com</h1><br />
            <a className="pr-6 attention-animate" href="">Instagram</a>
            <a className="pr-6 attention-animate" href="https://www.linkedin.com/in/abdul-muheez-owosho-079841203/" rel="noreferrer">Linkedin</a>
            <a className="pr-6 attention-animate" href="">CV</a>
          </div>
        </div>
        <div className="divider"></div>
        <p className="py-4 text-center">Developed & Designed by me. <br></br>
        <span>Made with <span className="text-primary"> lots</span> of 🥤 and <span className="text-secondary">❤.</span></span></p>
      </div>
    </section>

    
  )
}

export default Footer