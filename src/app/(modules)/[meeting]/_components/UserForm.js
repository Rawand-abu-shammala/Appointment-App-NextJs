import { Input } from '@/components/ui/input'
import React from 'react'

function UserForm({setName,setEmail,setNote }) {
  return (
    <div className='flex flex-col p-8 gap-3 w-[50%]'>
            <div className='mb-3'>
                <h2>Name*</h2>
                <Input onChange={(e)=> setName(e.target.value)} className="border border-slate-400"/>
            </div>

             <div  className='mb-3'>
                <h2>Email*</h2>
                <Input type="email" onChange={(e)=> setEmail(e.target.value)} className="border border-slate-400"/>
            </div>

             <div className='mb-3'>
                <h2>Note*</h2>
                <Input onChange={(e)=> setNote(e.target.value)} className="border border-slate-400"/>
            </div>
    </div>
  )
}

export default UserForm