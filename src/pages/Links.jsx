import heroImage from '../img/hero-image-min.jpg';
import { Link } from 'react-router-dom'

function links() {
  return (
    <div className="flex h-screen justify-center">
        <div className="container my-auto px-4 text-center">
            <div className="py-6">
                <img src={heroImage} alt="Muheez" className='block mx-auto w-1/5 rounded-full' />
            </div>
            <div className="">
                <h1 className='text-3xl'>Muheez | Web Developer</h1>
                <p>All my links 👇🏾</p>
            </div>
            <div className="p-6">
                <div className="link-block bg-info p-4 mb-3 cursor-pointer">
                    <Link className='block' to="/">My portfolio</Link>
                </div>
                <div className="link-block bg-info p-4 mb-3 cursor-pointer">
                    <a className='block' href='https://www.instagram.com/muheezcodes/' rel="noreferrer" target="_blank">Instagram</a>
                </div>
                <div className="link-block bg-info p-4 mb-3 cursor-pointer">
                    <a className='block' href='https://muheezdesign.gumroad.com/' rel="noreferrer" target="_blank">Gumroad</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default links