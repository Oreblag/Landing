import React from 'react'
import '../css/footer.css'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
        <div className="footer-rectangle">
            <div className="flex justify-between mt-11">
                <p className="text-gray-400 font-medium">©2023 Yourcompany</p>
                <h1 className="text-slate-800 font-bold text-3xl">Landing</h1>
                <button className='relative flex rounded-sm text-white border py-2 px-10 bg-gray-800 text-sm hover:bg-white hover:text-gray-800 hover:border-gray-800 hover:border-2 active:text-white active:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true"'>Purchase now</button>
            </div>
            <hr className='hr-line text-gray-300 bg-gray-300 mt-11 mb-4' />
            <div className="flex justify-between my-8">
                <div className="">
                    <ul className="flex flex-row gap-14">
                        <li className="">
                            <a href="" className="text-gray-500">Home</a>
                        </li>
                        <li className="">
                            <a href="" className="text-gray-500">About</a>
                        </li>
                        <li className="">
                            <a href="" className="text-gray-500">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className="">
                    <ul className="flex flex-row gap-14">
                        <li className="">
                            <a href="" className="text-gray-500 text-2xl"><FaFacebookF /></a>
                        </li>
                        <li className="">
                            <a href="" className="text-gray-500 text-2xl"><FaLinkedinIn /></a>
                        </li>
                        <li className="">
                            <a href="" className="text-gray-500 text-2xl"><FaTwitter /></a>
                        </li>
                        <li className="">
                            <a href="" className="text-gray-500 text-2xl"><FaYoutube /></a>
                        </li>
                        <li className="">
                            <a href="" className="text-gray-500 text-2xl"><FaInstagram /></a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer