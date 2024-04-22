import React from 'react'
import '../css/mention.css'

const Mention = (props) => {
  return (
    <div>
        <div className="mention-content flex justify-between mt-11 mb-40 gap-44">
            <div className="">
                <img src={props.image} className='mention-img w-100 h-100' alt="undraw-mention-img" />
            </div>
            <div className="mt-6 pt-2">
                <h1 className="text-slate-800 font-semibold text-4xl h-11 w-100 mb-8 overflow-hidden">
                    Light, Fast & Powerful
                </h1>
                <p className="mention-text text-gray-500 flex flex-col">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magnam unde eos quia nesciunt id, in tempora vel! Odit, ducimus pariatur! Quaerat culpa excepturi consequuntur nostrum 
                    <span className='mt-4'>
                    reprehenderit perferendis, ipsa expedita ducimus harum numquam! Fugit facere vero, rerum id ipsum autem debitis dolore sunt fuga accusantium.
                    </span>
                </p>
                <button className='relative flex rounded-sm text-white border py-2 px-16 bg-gray-800 text-sm hover:bg-white hover:text-gray-800 hover:border-gray-800 hover:border-2 active:text-white active:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true" mt-16'>
                {props.button}</button>
            </div>
        </div>
    </div>
  )
}

export default Mention