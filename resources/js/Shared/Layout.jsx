import React from 'react'
import NavLink from './NavLink'
import { usePage } from '@inertiajs/inertia-react'

export default function Layout({children}) {
  const { auth } = usePage().props;
  return (
    <main>
    <section className='p-6 bg-gray-200'>
        <header className='flex justify-between'>
        <div className='flex items-center'>
          <h1 className='font-bold text-lg'> Settly Challenge</h1>
          <p className='text-sm ml-4'>{auth.user.username ? 'Hi '+ auth.user.username+ ' welcome to your admin account!' : null}</p>
        </div>
            <NavLink></NavLink>
        </header>
    </section>
   <section className='p-6'>
    <div className='max-w-3xl mx-auto'>
        <article>{children}</article>
    </div>
   </section>
  </main>
  )
}
