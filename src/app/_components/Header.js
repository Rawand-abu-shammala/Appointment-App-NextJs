"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

function Header() {
  return (
    <div>
        <div className='flex justify-between items-center p-4 shadow-md'>
            <Image className='w-[70px] md:w-[100px]' width={70} height={70} alt='logo' src="/logo.png"/>
      
            <ul className=' hidden text-[#039C96] font-bold  md:flex gap-14'>
                <li className= 'hover:bg-[#d0efee] transition-all duration-300 p-2 cursor-pointer'>Product</li>
                 <li className= 'hover:bg-[#d0efee] transition-all duration-300 p-2 cursor-pointer'>Pricing</li>
                  <li className= 'hover:bg-[#d0efee] transition-all duration-300 p-2 cursor-pointer'>About Us</li>
                   <li className= 'hover:bg-[#d0efee] transition-all duration-300 p-2 cursor-pointer'>Contact Us</li>
            </ul>

            <div >
         <LoginLink> <Button className="bg-[#039C96] mr-3 cursor-pointer">Login</Button></LoginLink>
      
       <RegisterLink>   <Button className="bg-[#FEBF2F] cursor-pointer">Get Started</Button></RegisterLink>
       
            </div>
        </div>

       
    </div>
  )
}

export default Header