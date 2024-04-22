import React from 'react'
import '../css/happynews.css'

const Happynews = (props) => {
  return (
    <div>
        <div className="happynews-content flex justify-between mt-11 mb-60 gap-44">
            <div className="">
                <img src={props.image} className='happynews-img w-100 h-100' alt="happynews" />
            </div>
            <div className="mt-14 pt-4">
                <h1 className="text-slate-800 font-semibold text-4xl h-11 w-100 mb-8 overflow-hidden">
                    Light, Fast & Powerful
                </h1>
                <p className="happynews-text text-gray-500 flex flex-col">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magnam unde eos quia nesciunt id, in tempora vel! Odit, ducimus pariatur! Quaerat culpa excepturi consequuntur nostrum 
                    <span className='mt-4'>
                    reprehenderit perferendis, ipsa expedita ducimus harum numquam! Fugit facere vero, rerum id ipsum autem debitis dolore sunt fuga accusantium.
                    </span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Happynews