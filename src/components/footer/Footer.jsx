import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

export const Footer = () => {
  return (
    <>
      <footer className='boxItems mt-10 bg-[#fff] p-5'>
     
        <div className='container flex justify-between'>
          <p>Cartsy Medicine - All right reserved - Design & Developed by RedQ, Inc</p>
          <div className='social flex gap-2 '>
            <BsFacebook className='icon w-5 h-5 cursor-pointer' />
            <RiInstagramFill className='icon w-5 h-5 cursor-pointer' />
            <AiFillTwitterCircle className='icon w-5 h-5 cursor-pointer' />
            <AiFillLinkedin className='icon w-5 h-5 cursor-pointer' />
          </div>
        </div>
      </footer>
    </>
  )
}
