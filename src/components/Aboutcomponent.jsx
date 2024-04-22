import React from 'react'
import '../css/about.css'
import image2 from '../images/Left.png'

const Aboutcomponent = (props) => {
  return (
    <div>
        <div className="about-container flex flex-row gap-28 mb-24">
            <img src={props.image} alt="image" className="about-img" />
            <div className="py-20">
                <h1 className="text-slate-800 font-semibold text-4xl h-11 w-100 mb-8 overflow-hidden">{props.header}</h1>
                <p className="about-text text-gray-500 flex flex-col text-sm mb-6">
                    {props.text}
                </p>
                <div className="flex justify-between items-center gap-4">
                    <div className="flex flex-col space-y-4">
                        <img src={image2} className='icon-img' alt="icon" />
                        <h3 className="text-slate-800 font-semibold text-1xl w-100 space-y-5 mb-8 overflow-hidden">
                            Title Goes Here
                        </h3>
                        <p className="icon-text text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate fuga deleniti asperiores veritatis?
                        </p>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <img src={image2} className='icon-img' alt="icon" />
                        <h3 className="text-slate-800 font-semibold text-1xl w-100 space-y-5 mb-8 overflow-hidden">
                            Title Goes Here
                        </h3>
                        <p className="icon-text text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate fuga deleniti asperiores veritatis?
                        </p>
                    </div>
                </div>
                <div className="flex justify-between mt-11 gap-4">
                    <div className="flex flex-col space-y-4">
                        <img src={image2} className='icon-img' alt="icon" />
                        <h3 className="text-slate-800 font-semibold text-1xl w-100 space-y-5 mb-8 overflow-hidden">
                            Title Goes Here
                        </h3>
                        <p className="icon-text text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate fuga deleniti asperiores veritatis?
                        </p>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <img src={image2} className='icon-img' alt="icon" />
                        <h3 className="text-slate-800 font-semibold text-1xl w-100 space-y-5 mb-8 overflow-hidden">
                            Title Goes Here
                        </h3>
                        <p className="icon-text text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate fuga deleniti asperiores veritatis?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutcomponent