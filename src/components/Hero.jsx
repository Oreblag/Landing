import React from 'react'
import '../css/hero.css';
import image1 from '../images/Group.png'
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div>
        <div className="hero-container">
            <Navbar />
            <div className="hero-content flex justify-between mt-11 pt-11">
                <div className="hero-text-left">
                    <h1 className="text-slate-800 font-semibold text-5xl h-36 w-55 space-y-3 mb-2 overflow-hidden">
                        Introduce Your Product <br /> Quickly & Effectively
                    </h1>
                    <p className="hero-text text-gray-500 space-y-10">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolore corporis impedit ex exercitationem itaque tenetur magnam, quasi quos quis nisi mollitia dicta placeat earum et eius officia enim! Nam dolores dolorem accusamus quidem repellat praesentium magni impedit dolore nisi, expedita aliquam vitae quis facilis?
                    </p>
                    <div className="hero-buttons flex flex-wrap flex-grow-2 space-x-6">
                        <button className='relative flex rounded-sm text-white border py-2 px-16 bg-gray-800 text-sm hover:bg-white hover:text-gray-800 hover:border-gray-800 hover:border-2 active:text-white active:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true"'>
                            Purchase UI Kit
                        </button>
                        <button className='relative flex rounded-sm text-gray-800 border-2 hover:text-white hover:bg-gray-800 border-gray-800 py-2 px-16 bg-transparent text-sm active:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true"'>
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="mt-11 pt-11">
                    <img src={image1} className="hero-image w-100 h-100 object-cover" alt="group-image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero