import React from 'react'
import '../css/undrawmobile.css'
import image1 from '../images/undraw_mobile_login_ikmv.png'
import image2 from '../images/Left.png'

const Undrawmobile = () => {
  return (
    <div>
        <div className="undrawmobile-content flex justify-between gap-2 mt-11 pt-11">
            <div className="mt-6 pt-5">
                <h1 className="text-slate-800 font-semibold text-4xl w-100 mb-10 h-11 overflow-hidden">
                    Light, Fast & Powerful
                </h1>
                <p className="undrawmobile-text text-gray-500 space-y-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorem ratione aspernatur officiis perspiciatis! Vel assumenda provident corrupti esse aut dolor expedita ipsam error hic repudiandae voluptatibus illo adipisci sapiente consequuntur in minus ea architecto, mollitia id ad eveniet nobis? Quae, ratione.
                </p>
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
            <div className="">
                <img src={image1} className='undrawmobile-img w-75 h-100 object-cover' alt="mobile-login" />
            </div>
        </div>
    </div>
  )
}

export default Undrawmobile