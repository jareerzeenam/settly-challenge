import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function Guest({children}) {
  return (
    <main>
    <header>
      <Link href="/">Home</Link>
      <Link href="/clients">Clients</Link>
    </header>
    <article>{children}</article>
  </main>
  )
}
