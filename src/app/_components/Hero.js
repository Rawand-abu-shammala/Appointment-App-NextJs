
"use client"
import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { useRouter } from 'next/navigation'
function Hero() {

  const {user} = useKindeBrowserClient()
  const router = useRouter()
  useEffect(()=>{
    if(user){
      router.push("/dashboard")
    }
  })
  return (
    <div>
         <div className='text-center mt-20 max-w-3xl m-auto'>
          <h1 className=' text-[40px] md:text-[60px] text-[#039C96]'>Make scheduling effortless</h1>
          <h1 className='text-[30px] text-slate-400'> our smart scheduling tool helps you find the perfect time in seconds </h1>

          
            <div className='mt-5 p-5'>
                <Button className="bg-[#039C96] mr-3 cursor-pointer">Sing Up With Google</Button>
                 <Button className="bg-[#FEBF2F] cursor-pointer">Sing Up With Facebook</Button>
            </div>
            <hr className= 'text-slate-300' />
            <h2><Link href="" className="text-primary">Sign Up With Email</Link> </h2>
        </div>
    </div>
  )
}

export default Hero