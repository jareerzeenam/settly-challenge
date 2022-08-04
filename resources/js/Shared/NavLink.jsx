import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function NavLink() {
  return (
    <nav className='ml-6'>
        <ul className='flex list-disc space-x-4 list-inside'>
            <li><Link href="/" className='text-blue-500 hover:underline'>Home</Link></li>
            <li><Link href="/clients" className='text-blue-500 hover:underline'>Clients</Link></li>
            <li><Link href="/clients/create" className='text-blue-500 hover:underline'>Create</Link></li>
            <li><Link href="/logout" method='post' as='button' className='text-blue-500 hover:underline'>Log Out</Link></li>
        </ul>
    </nav>
  )
}
