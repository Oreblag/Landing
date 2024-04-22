import React from 'react'
import '../css/rectangle.css'

const Rectangle = () => {
  return (
    <div>
        <div className="rectangle-content pt-16 overflow-hidden">
            <div className="mt-36">
                <h1 className="text-slate-800 font-semibold text-4xl text-center h-11 w-100 space-y-5 mb-8 overflow-hidden">
                    A Price To Suit Everyone
                </h1>
                <p className="rectangle-text text-gray-500 text-center mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae voluptas omnis blanditiis molestias vitae tempore, id, repellat quasi autem et officiis tenetur fugit dolorem quis. Doloremque temporibus repudiandae quas non.</p>
                <h1 className="price text-slate-800 font-semibold text-7xl text-center mx-auto mt-16 overflow-hidden">
                    $40
                </h1>
                <p className="text-slate-800 font-normal text-2xl text-center mx-auto mt-5">UI Design Kit</p>
                <p className="text-gray-400 font-normal text-2xl text-center mx-auto mt-24">See, One price. Simple.</p>
                <button className='relative flex rounded-sm text-white border py-2 px-24 bg-gray-800 text-sm hover:bg-white hover:text-gray-800 hover:border-gray-800 hover:border-2 active:text-white active:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true" text-center mx-auto mt-6'>Purchase Now</button>
            </div>
        </div>
    </div>
  )
}

export default Rectangle