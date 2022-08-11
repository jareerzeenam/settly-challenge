import React from 'react'
import Layout from '../../Shared/Layout'
import { Link } from '@inertiajs/inertia-react'

export default function Show({client}) {
  return (
    <Layout>
        <div>
            <div className="text-center">
              <img
                src={location.protocol + '//' + location.host + '/storage/images/'+client.avatar}
                className="rounded-full w-32 mb-4 mx-auto"
                alt="Avatar"
              />
              <h5 className="text-xl font-medium leading-tight mb-2">{client.name} {client.avatar}</h5>
              <p className="text-gray-500 pb-2">{client.email}</p>
              <Link href="/clients">
                <button className="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500 btn-lg" >Back</button>
              </Link>
            </div>
        </div>
    </Layout>
  )
}
