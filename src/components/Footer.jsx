function Footer() {
  return (
    <section className="w-full bg-info">
      <div className="container mx-auto px-4 py-24 ">
        <h1 className="text-center text-4xl">You've <span className="attention-animate text-primary"> reached</span> the end of the page but...</h1>
        <div className="divider"></div>
        <div className="grid sm:grid-cols-2 grid-cols-1 mt-10 gap-4">
          <div className="text-center">
            <p>It can't stop here...</p>
            <h1>Let's get in touch! I'm here to connect!</h1>
          </div>
          <div className="text-center">
            <h1 className="md:text-2xl text-lg attention-animate text-primary">
              <a href='mailto:muheez@muheezdesign.com'>muheez@muheezdesign.com</a>
            </h1>
            <a className="pr-6 attention-animate" href="https://www.instagram.com/muheezcodes/" rel="noreferrer" target="_blank">Instagram</a>
            <a className="pr-6 attention-animate" href="https://github.com/Mfactor101" rel="noreferrer" target="_blank">Github</a>
            <a className="pr-6 attention-animate" href="../img/muheez-cv.pdf" download="Muheez-CV">CV</a>
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