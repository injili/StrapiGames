import React, { useState } from 'react';
import { Label, TextInput } from 'flowbite-react';
import { IoIosSearch, IoMdMailOpen } from "react-icons/io";
import { FaFacebook, FaWhatsapp, FaInstagram, FaShoppingCart, FaPhone } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Cart } from './Cart';

export const Navbar = () => {
  const [open,setOpen] = useState(false);

  return (
      <div className='sticky top-0 relative z-40 py-4 sm:py-4 md:py-4 lg:py-8 xl:py-8 2xl-8 mx-8'>
        <nav className="bg-zinc-950 py-4 rounded-lg">
          <div className="container mx-auto flex justify-between items-center ">
            <Link to='/' className="ml-4"><span className='text-slate-100'>LOGO</span>
              {/* <img className='h-12 hidden md:block' alt='lilibetz logo' src={bigLogo}/>
              <img className='h-8 w-20 md:hidden' src={smallLogo} alt="lilibetz logo" /> */}</Link>
            <TextInput className='mx-4' id="search" type="text" icon={IoIosSearch} placeholder="Search" />
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-2xl text-slate-50 rounded-lg md:hidden focus:outline-none focus:ring-1 focus:ring-slate-50" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <MdMenuOpen className=''/>
            </button>
            <div className="hidden w-full md:block md:w-auto text-slate-50" id="navbar-default">
              <ul className="flex space-x-10">
                <li><Link to='/products/1'>Shop</Link></li>
                <li><Link to='/products/2'>Sofas</Link></li>
                <li><Link to='/products/3'>Dining</Link></li>
                <li><Link to='/products/4'>Tables</Link></li>
                <li><Link to='/products/5'>Beds</Link></li>
              </ul>
            </div>
            <ul className='flex space-x-4 mx-4'>
              <li className="text-amber-400 sm:text-xl text-2xl hover:text-gray-300 flex gap-1" onClick={()=>setOpen(!open)}><FaShoppingCart /><span>0</span></li>
            </ul>
          
          </div>
        </nav>
      {open && <Cart/>}
      </div>
  )
}
