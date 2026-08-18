import React from 'react'
import Link from 'next/link'

export default function NavbarComponent() {
  return (
   <nav className='bg-gray-900 border-slate-400 text-white px-6 py-3'>
    <div className='flex justify-between items-center'>
        <Link href="/" className='text-2xl'>AuthApp</Link>
        <ul className='flex gap-6'>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/register">Register</Link></li>
        </ul>

    </div>
   </nav>
  )
}
