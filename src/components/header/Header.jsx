
import logo from "../../assets/images/logo.svg"
import menu from "../../assets/images/menu.svg"
import close from "../../assets/images/close.svg"

import "./header.css"
// import { User } from "./User"
import { nav } from "../../assets/data/data"
import { Link } from "react-router-dom"


import React, { useState } from 'react'



export const Header = () => {
 
  const [active,setactive]=useState('')
  const [toggle,setToggle]=useState(false)
  return (
    <>
      {/* <header className='header'>
        <div className='scontainer flex items-center justify-between'>
          <div className='logo'>
            <img src={logo} alt='logo' width='100px' />
          </div>
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
       
        </div>
      </header> */}
     

     <header className='header fixed top-0  w-full '>
          <nav className={`nav    items-center z-20`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* logo */}
        <Link to='/'
        className='flex items-center gap-2'
        onClick={() => {
          setactive('');
          window.scrollTo(0,0)
        }
        }
        >
          <img src={logo} alt="logo" className='w-16 h-16 object-contain' />
         
        
        </Link>
        {/*links  */}
        <ul className='list-none hidden sm:flex flex-row gap-10 '>
          {nav.map((link,index) => {
          return(
            <li key={index} className={`${active === link.title ?"text-white":"text-secondary"} hover:text-white  font-medium cursor-pointer`} 
            onClick={() => {
              setactive(link.title)
            }
            }>
            <Link to={link.url}>{link.title}</Link>
          </li>
          )
            
          }
          )}

        </ul>
        {/* icon menu */}
        <div className='sm:hidden flex flex-1 items-center justify-end '>
          <img src= {toggle ? close: menu } alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=>setToggle(!toggle)}/>
          <div className={`${!toggle ? 'hidden' :'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none  flex flex-col  justify-end bg-white px-6 rounded-xl items-start gap-4 '>
          {nav.map((link) => {
          return(
            <li key={link.id} className={`${active === link.title ?"text-white":"text-secondary"} font-poppines  font-medium cursor-pointer text-[16px]`} 
            onClick={() => {
              setToggle(!toggle)
              setactive(link.title)
            }
            }>
            <Link to={link.url}>{link.title}</Link>
          </li>
          )
            
          }
          )}

        </ul>
          </div>
        </div>

      </div>

    </nav>
    </header>
    </>
  )
}
