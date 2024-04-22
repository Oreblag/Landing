import React from 'react'
import '../css/product.css'
import image1 from '../images/Vert.png'
import image2 from '../images/Left.png'

const Productcomponent3 = () => {
  return (
    <div>
        <div className="h-auto w-auto flex flex-row gap-28 pt-28 px-48">
            <div className="py-16">
                <h1 className="text-gray-700 text-5xl font-semibold h-32 overflow-hidden">Design & Build Your Own <br /> Landing Pages</h1>
                <p className="text-gray-400 mb-11">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum aspernatur tempora accusantium dolor quis. Soluta ipsum consequatur veritatis laborum maxime! A quia quibusdam eveniet quisquam dolorum. Eius inventore nihil ducimus odio deleniti illo magni error, quibusdam corrupti enim dolor maxime necessitatibus.</p>
                <div className="flex justify-between flex-col items-center gap-10 mb-8">
                    <div className="flex flex-col space-y-4">
                        <img src={image2} className='icon-img' alt="icon" />
                        <h3 className="text-slate-800 font-semibold text-1xl w-100 space-y-5 mb-8 overflow-hidden">
                            Title Goes Here
                        </h3>
                        <p className="icon-text text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate fuga deleniti asperiores veritatis?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur iste nihil quis?
                        </p>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <img src={image2} className='icon-img' alt="icon" />
                        <h3 className="text-slate-800 font-semibold text-1xl w-100 space-y-5 mb-8 overflow-hidden">
                            Title Goes Here
                        </h3>
                        <p className="icon-text text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate fuga deleniti asperiores veritatis?
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla distinctio sequi eos minima.
                        </p>
                    </div>
                </div>
            </div>
            <img src={image1} alt="vert" className="product-img" />
        </div>
    </div>
  )
}

export default Productcomponent3