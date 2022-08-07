import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function NavLink() {
  return (
    <nav className='ml-6'>
        <ul className='text-black flex space-x-6'>
            <li><Link href="/" className='hover:underline'>Home</Link></li>
            <li><Link href="/clients" className='hover:underline'>Clients</Link></li>
            <li><Link href="/clients/create" className='hover:underline'>Create</Link></li>
            <li><Link href="/logout" method='post' as='button' className='hover:underline'>Log Out</Link></li>
        </ul>
    </nav>
  )
}
